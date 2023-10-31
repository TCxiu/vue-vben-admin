import { snakeCase, camelCase } from 'lodash-es';

const modelTemplate = (wrapper, modelName, modelDesc, fields) => {
  const tableName = snakeCase(modelName);

  let fieldTemplate = fields.length == 1 ? '\r\n}' : '';
  for (let index = 1; index < fields.length; index++) {
    const field = fields[index];
    const { doc, sql, type, name } = field;
    fieldTemplate += `  
    @Column(columnDefinition = "${sql} comment '${doc}'")
    /***  ${doc}   */
    private ${type} ${name};
    `;
    if (index == fields.length - 1) {
      fieldTemplate += '\r\n}';
    }
  }

  const base = `package ${wrapper}.model;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Comment;
import org.hibernate.annotations.GenericGenerator;
import java.io.Serializable;
import java.util.Date;
  
/**
 *
 * 描述: ${modelDesc}
 *
 * @author TcLi
 * 邮箱 254870497@qq.com
 * 创建时间 2022-03-21 11:41:17
 */
  
@Data
@Entity
@TableName
@Table(name = "${tableName}")
@Comment(value = "${modelDesc}")
public class ${modelName} implements Serializable {
    @Id
    @TableId
    @Column(columnDefinition = "varchar(255) comment '主键'")
    @GeneratedValue(generator = "IdGenerator")
    @GenericGenerator(name = "IdGenerator",strategy = "com.mywl.framework.common.service.IdGenerator")
    /**  主键   */
    private String id;
`;

  const template = base + fieldTemplate;

  return template;
};

const dtoTemplate = (wrapper, modelName, modelDesc, fields) => {
  const className = modelName + 'Option';

  let fieldTemplate = fields.length == 1 ? '\r\n}' : '';
  for (let index = 1; index < fields.length; index++) {
    const field = fields[index];
    const { doc, type, name, edit } = field;
    if (edit === '1') {
      fieldTemplate += `  
    /***  ${doc}   */
    private ${type} ${name};
    `;
    }

    if (index == fields.length - 1) {
      fieldTemplate += '\r\n}';
    }
  }

  const base = `package ${wrapper}.dto;

import lombok.Data;
import java.io.Serializable;
  
/**
 *
 * 描述: ${modelDesc}添加/修改请求体
 *
 * @author TcLi
 * 邮箱 254870497@qq.com
 * 创建时间 2022-03-21 11:41:17
 */
  
@Data
public class ${className} implements Serializable {
    /**  主键   */
    private String id;
`;

  const template = base + fieldTemplate;

  return template;
};

const queryTemplate = (wrapper, modelName, modelDesc, fields) => {
  const className = modelName + 'ListParams';

  let fieldTemplate = '';
  for (let index = 0; index < fields.length; index++) {
    const field = fields[index];
    const { doc, type, name, query } = field;
    if (query === '1') {
      fieldTemplate += `  
    /***  ${doc}   */
    private ${type} ${name};
    `;
    }

    if (index == fields.length - 1) {
      fieldTemplate += '\r\n}';
    }
  }

  const base = `package ${wrapper}.query;

import lombok.Data;
import java.io.Serializable;
  
/**
 *
 * 描述: ${modelDesc}列表查询参数
 *
 * @author TcLi
 * 邮箱 254870497@qq.com
 * 创建时间 2022-03-21 11:41:17
 */
  
@Data
public class ${className} implements Serializable {
    /**  当前页    */
    private Integer pageNo = 1;

    /**  页内容数据多少  */
    private Integer pageSize = 10;
`;

  const template = base + fieldTemplate;

  return template;
};

const voTemplate = (wrapper, modelName, modelDesc, fields) => {
  const className = modelName + 'List';

  let fieldTemplate = '';
  for (let index = 0; index < fields.length; index++) {
    const field = fields[index];
    const { doc, type, name, vo } = field;
    if (vo === '1') {
      fieldTemplate += `  
    /***  ${doc}   */
    private ${type} ${name};
    `;
    }

    if (index == fields.length - 1) {
      fieldTemplate += '\r\n}';
    }
  }

  const base = `package ${wrapper}.vo;

import lombok.Data;
import java.io.Serializable;
  
/**
 *
 * 描述: ${modelDesc}列表
 *
 * @author TcLi
 * 邮箱 254870497@qq.com
 * 创建时间 2022-03-21 11:41:17
 */
  
@Data
public class ${className} implements Serializable {
`;

  const template = base + fieldTemplate;

  return template;
};

const mapperTemplate = (wrapper, modelName, modelDesc) => {
  return `package ${wrapper}.mapper;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.Constants;
import ${wrapper}.dto.${modelName}Option;
import ${wrapper}.model.${modelName};
import ${wrapper}.vo.${modelName}List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

/**
 * ${modelDesc}  mapper接口
 * 
 * @author TcLi
 * 邮箱 254870497@qq.com
 * 创建时间 2023/6/15 12:08
 */

@Mapper
@Component
public interface ${modelName}Mapper extends BaseMapper<${modelName}> {
    IPage<${modelName}List> list(IPage page, @Param(Constants.WRAPPER) Wrapper ew);

    ${modelName}Option info(String id);
}
`;
};

const xmlTemplate = (wrapper, modelName) => {
  const tableName = snakeCase(modelName);
  return `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="${wrapper}.mapper.${modelName}Mapper">
    <select id="list" resultType="${wrapper}.vo.${modelName}List">
        select * from ${tableName} \${ew.customSqlSegment}
    </select>

    <select id="info" resultType="${wrapper}.dto.${modelName}Option">
        select * from ${tableName} where id = #{id}
    </select>
</mapper>
`;
};

const serviceTemplate = (wrapper, modelName, modelDesc) => {
  return `package ${wrapper}.service;

import com.mywl.framework.common.pojo.JsonResult;
import ${wrapper}.dto.${modelName}Option;
import ${wrapper}.query.${modelName}ListParams;

/**
 * ${modelDesc}  service接口
 * 
 * @author TcLi
 * 邮箱 254870497@qq.com
 * 创建时间 2023/6/15 12:08
 */

public interface ${modelName}Service {
    JsonResult list(${modelName}ListParams params)throws Exception;

    JsonResult add(${modelName}Option record)throws Exception;

    JsonResult info(String id)throws Exception;

    JsonResult edit(String id, ${modelName}Option record)throws Exception;

    JsonResult del(String id)throws Exception;
}
`;
};

const implTemplate = (wrapper, modelName, modelDesc, module) => {
  const camelCaseClass = camelCase(modelName);
  return `package ${module}.service;

import cn.hutool.core.util.ObjectUtil;
import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.mywl.framework.common.exception.BusinessException;
import com.mywl.framework.common.pojo.JsonResult;
import com.mywl.framework.common.utils.CopyUtil;
import ${wrapper}.dto.${modelName}Option;
import ${wrapper}.mapper.${modelName}Mapper;
import ${wrapper}.model.${modelName};
import ${wrapper}.query.${modelName}ListParams;
import ${wrapper}.service.${modelName}Service;
import ${wrapper}.vo.${modelName}List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
public class ${modelName}ServiceImpl implements ${modelName}Service {
    @Autowired
    ${modelName}Mapper ${camelCaseClass}Mapper;

    @Override
    public JsonResult list(${modelName}ListParams params) throws Exception {
        Page page = new Page(params.getPageNo(), params.getPageSize());

        IPage<${modelName}List> list = ${camelCaseClass}Mapper.list(page, Wrappers.lambdaQuery(${modelName}.class)
                
        );
        return JsonResult.page(list.getTotal(),list.getRecords());
    }

    @Override
    @Transactional
    public JsonResult add(${modelName}Option record) throws Exception {
        record.setId(null);
        
        ${modelName} model = CopyUtil.copy(record, ${modelName}.class);
        
        ${camelCaseClass}Mapper.insert(model);
        return JsonResult.success();
    }

    @Override
    public JsonResult info(String id) throws Exception {
        ${modelName}Option info = ${camelCaseClass}Mapper.info(id);
        return JsonResult.success(info);
    }

    @Override
    @Transactional
    public JsonResult edit(String id, ${modelName}Option record) throws Exception {
        if (!id.equalsIgnoreCase(record.getId())){
            throw new BusinessException(15151000,"主键不一致,无法修改");
        }
        ${modelName} model = ${camelCaseClass}Mapper.selectById(id);
        if (ObjectUtil.isEmpty(model)){
            throw new BusinessException(15151001,"不存在此${modelDesc},无法更新");
        }


        CopyUtil.copy(record,model);
        ${camelCaseClass}Mapper.updateById(model);
        return JsonResult.success();
    }

    @Override
    @Transactional
    public JsonResult del(String id) throws Exception {
        ${camelCaseClass}Mapper.deleteById(id);
  
        return JsonResult.success();
    }
}
`;
};

const controllerTemplate = (wrapper, modelName, modelDesc, module, url) => {
  const camelCaseClass = camelCase(modelName);
  return `package ${module}.controller;

import com.mywl.framework.common.pojo.JsonResult;
import ${wrapper}.dto.${modelName}Option;
import ${wrapper}.query.${modelName}ListParams;
import ${wrapper}.service.${modelName}Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

/**
 * ${modelDesc}接口
 *
 * @author TcLi
 * 邮箱 254870497@qq.com
 * 创建时间 2023/6/8 16:15
 */
@RestController
@RequestMapping("${url}")
public class ${modelName}Controller {
    @Autowired
    ${modelName}Service ${camelCaseClass}Service;

    /**
     * ${modelDesc}分页列表
     *
     * 方法名 list ${modelDesc}列表
     * @param params 查询参数
     * @return com.mywl.framework.common.pojo.JsonResult 响应体
     * @throws  Exception 异常
     */
    @GetMapping("")
    public JsonResult list(${modelName}ListParams params) throws Exception {
        return ${camelCaseClass}Service.list(params);
    }

   /**
    * 添加${modelDesc}
    *
    * 方法名 add 添加
    * @param record ${modelDesc}请求体
    * @return com.mywl.framework.common.pojo.JsonResult 响应体
    * @throws  Exception 异常
    */
    @PostMapping("")
    public JsonResult add(@RequestBody @Validated ${modelName}Option record) throws Exception {
        return ${camelCaseClass}Service.add(record);
    }

    /**
     * ${modelDesc}详情
     *
     * 方法名 info
     * @param id 主键
     * @return com.mywl.framework.common.pojo.JsonResult 响应体
     * @throws  Exception 异常
     */
    @GetMapping("/{id}")
    public JsonResult info(@PathVariable String id) throws Exception {
        return ${camelCaseClass}Service.info(id);
    }

    /**
     *  修改${modelDesc}
     *
     * 方法名 edit
     * @param id    主键
     * @param record  修改请求体
     * @return com.mywl.framework.common.pojo.JsonResult 响应体
     * @throws  Exception 异常
     */
    @PutMapping("/{id}")
    public JsonResult edit(@PathVariable String id,@RequestBody @Validated ${modelName}Option record) throws Exception {
        return ${camelCaseClass}Service.edit(id, record);
    }

    /**
     * 删除${modelDesc}
     *
     * 方法名 del
     * @param id 主键
     * @return com.mywl.framework.common.pojo.JsonResult 响应体
     * @throws  Exception 异常
     */
    @DeleteMapping("/{id}")
    public JsonResult del(@PathVariable String id) throws Exception {
        return ${camelCaseClass}Service.del(id);
    }
}
`;
};

export const genTemplate = (tab, form) => {
  const {
    wrapper = 'com.x.admin.wrapper.test',
    modelName = 'Test',
    modelDesc = '测试表',
    url = 'test',
    field = [
      {
        name: 'id',
        doc: '主键',
        type: 'String',
        sql: 'varchar(255)',
        vo: '1',
        query: '0',
        edit: '1',
      },
    ],
    module = 'com.x.admin.module.test',
  } = form;
  if (tab === 'model') {
    return modelTemplate(wrapper, modelName, modelDesc, field);
  }
  if (tab === 'dto') {
    return dtoTemplate(wrapper, modelName, modelDesc, field);
  }
  if (tab === 'query') {
    return queryTemplate(wrapper, modelName, modelDesc, field);
  }
  if (tab === 'vo') {
    return voTemplate(wrapper, modelName, modelDesc, field);
  }
  if (tab === 'mapper') {
    return mapperTemplate(wrapper, modelName, modelDesc);
  }
  if (tab === 'xml') {
    return xmlTemplate(wrapper, modelName);
  }
  if (tab === 'service') {
    return serviceTemplate(wrapper, modelName, modelDesc);
  }
  if (tab === 'impl') {
    return implTemplate(wrapper, modelName, modelDesc, module);
  }
  if (tab === 'controller') {
    return controllerTemplate(wrapper, modelName, modelDesc, module, url);
  }
  return '';
};
