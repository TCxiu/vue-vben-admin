// mock/constant/system.bundled_42v2laxlypu.bundled_zgxjfxbfub.mjs
function resultSuccess(result, { message = "ok" } = {}) {
  return {
    code: 200,
    result,
    message,
    type: "success"
  };
}
var captchaInfo = {
  base64Image: "data:image/png;base64,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",
  key: "8846b618cbac4da19f774987c46bc10f"
};
var loginResult = {
  userId: "1",
  token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiLlubPlj7DlkI0iLCJpYXQiOjE2NDY3MjcyNDEsImlzcyI6IuetvuWPkeacuuaehC3lpKnniZvnp5HmioAiLCJuYmYiOjE2NDY3MjcyNDEsInN1YiI6IjEwMDEzNjkyIiwianRpIjoiNmRlZTUyYWMtMjQ3Ni00YmQ5LTg2NTItMzRhZWQzZWM0YjY2In0.eepjjTPe0ja_Lst3BjnLdZz1CGF03g2EO5HhOWANhtF4pCCoJ0B6uaqlAyfAXWEYte0CRpYc7XQCYPW28pLMW1HXD6AT2hzz7t-6nV5VMCEJ66y_fleFIIUsCepiPlQ6yPBayb-G_Bb-dX5i1TZpAs7JK6lccO1vpO2Ayr-P57VUKNpQGnOwVJ7vE3lwYDXf1NcUXvSrdIINsw51TVGdE_uwA_tEWlzVjOk1FpEo0iAzleub_NU0AxA9YydrIPcY7x3N4fGlHRO04o2HJe088JycplMcmAYIy4fGSQkYtbrS2gyUUEnAMqrM2mI121WHR8VaEXpqBqL5AHhE0Pdidw"
};
var system_default = [
  // 登录接口
  {
    url: "/basic-api/constant/system/captcha",
    method: "get",
    response: () => {
      return resultSuccess(captchaInfo);
    }
  },
  // 登录接口
  {
    url: "/basic-api/constant/system/login",
    method: "post",
    response: () => {
      return resultSuccess(loginResult);
    }
  }
];
export {
  system_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9jb25zdGFudC9tb2NrL2NvbnN0YW50L21vY2svX3V0aWwudHMiLCAibW9jay9jb25zdGFudC9tb2NrL2NvbnN0YW50L21vY2svY29uc3RhbnQvc3lzdGVtLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIkM6XFxcXFVzZXJzXFxcXHRjbGlcXFxcRGVza3RvcFxcXFx2dWUtdmJlbi1hZG1pblxcXFxtb2NrXFxcXF91dGlsLnRzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkM6XFxcXFVzZXJzXFxcXHRjbGlcXFxcRGVza3RvcFxcXFx2dWUtdmJlbi1hZG1pblxcXFxtb2NrXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9DOi9Vc2Vycy90Y2xpL0Rlc2t0b3AvdnVlLXZiZW4tYWRtaW4vbW9jay9fdXRpbC50c1wiOy8vIEludGVyZmFjZSBkYXRhIGZvcm1hdCB1c2VkIHRvIHJldHVybiBhIHVuaWZpZWQgZm9ybWF0XG5pbXBvcnQgeyBSZXN1bHRFbnVtIH0gZnJvbSAnL0AvZW51bXMvaHR0cEVudW0nO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzdWx0U3VjY2VzczxUID0gUmVjb3JkYWJsZT4ocmVzdWx0OiBULCB7IG1lc3NhZ2UgPSAnb2snIH0gPSB7fSkge1xuICByZXR1cm4ge1xuICAgIGNvZGU6IFJlc3VsdEVudW0uU1VDQ0VTUyxcbiAgICByZXN1bHQsXG4gICAgbWVzc2FnZSxcbiAgICB0eXBlOiAnc3VjY2VzcycsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXN1bHRQYWdlU3VjY2VzczxUID0gYW55PihcbiAgcGFnZTogbnVtYmVyLFxuICBwYWdlU2l6ZTogbnVtYmVyLFxuICBsaXN0OiBUW10sXG4gIHsgbWVzc2FnZSA9ICdvaycgfSA9IHt9LFxuKSB7XG4gIGNvbnN0IHBhZ2VEYXRhID0gcGFnaW5hdGlvbihwYWdlLCBwYWdlU2l6ZSwgbGlzdCk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5yZXN1bHRTdWNjZXNzKHtcbiAgICAgIGl0ZW1zOiBwYWdlRGF0YSxcbiAgICAgIHRvdGFsOiBsaXN0Lmxlbmd0aCxcbiAgICB9KSxcbiAgICBtZXNzYWdlLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzdWx0RXJyb3IoXG4gIG1lc3NhZ2UgPSAnUmVxdWVzdCBmYWlsZWQnLFxuICB7IGNvZGUgPSBSZXN1bHRFbnVtLkVSUk9SLCByZXN1bHQgPSBudWxsIH0gPSB7fSxcbikge1xuICByZXR1cm4ge1xuICAgIGNvZGUsXG4gICAgcmVzdWx0LFxuICAgIG1lc3NhZ2UsXG4gICAgdHlwZTogJ2Vycm9yJyxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2luYXRpb248VCA9IGFueT4ocGFnZU5vOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIsIGFycmF5OiBUW10pOiBUW10ge1xuICBjb25zdCBvZmZzZXQgPSAocGFnZU5vIC0gMSkgKiBOdW1iZXIocGFnZVNpemUpO1xuICByZXR1cm4gb2Zmc2V0ICsgTnVtYmVyKHBhZ2VTaXplKSA+PSBhcnJheS5sZW5ndGhcbiAgICA/IGFycmF5LnNsaWNlKG9mZnNldCwgYXJyYXkubGVuZ3RoKVxuICAgIDogYXJyYXkuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBOdW1iZXIocGFnZVNpemUpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSByZXF1ZXN0UGFyYW1zIHtcbiAgbWV0aG9kOiBzdHJpbmc7XG4gIGJvZHk6IGFueTtcbiAgaGVhZGVycz86IHsgYXV0aG9yaXphdGlvbj86IHN0cmluZyB9O1xuICBxdWVyeTogYW55O1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBcdTY3MkNcdTUxRkRcdTY1NzBcdTc1MjhcdTRFOEVcdTRFQ0VyZXF1ZXN0XHU2NTcwXHU2MzZFXHU0RTJEXHU4M0I3XHU1M0Q2dG9rZW5cdUZGMENcdThCRjdcdTY4MzlcdTYzNkVcdTk4NzlcdTc2RUVcdTc2ODRcdTVCOUVcdTk2NDVcdTYwQzVcdTUxQjVcdTRGRUVcdTY1MzlcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXF1ZXN0VG9rZW4oeyBoZWFkZXJzIH06IHJlcXVlc3RQYXJhbXMpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICByZXR1cm4gaGVhZGVycz8uYXV0aG9yaXphdGlvbjtcbn1cbiIsICJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIkM6XFxcXFVzZXJzXFxcXHRjbGlcXFxcRGVza3RvcFxcXFx2dWUtdmJlbi1hZG1pblxcXFxtb2NrXFxcXGNvbnN0YW50XFxcXHN5c3RlbS50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCJDOlxcXFxVc2Vyc1xcXFx0Y2xpXFxcXERlc2t0b3BcXFxcdnVlLXZiZW4tYWRtaW5cXFxcbW9ja1xcXFxjb25zdGFudFwiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vQzovVXNlcnMvdGNsaS9EZXNrdG9wL3Z1ZS12YmVuLWFkbWluL21vY2svY29uc3RhbnQvc3lzdGVtLnRzXCI7aW1wb3J0IHsgTW9ja01ldGhvZCB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vY2snO1xuaW1wb3J0IHsgcmVzdWx0U3VjY2VzcyB9IGZyb20gJy4uL191dGlsJztcblxuY29uc3QgY2FwdGNoYUluZm8gPSB7XG4gIGJhc2U2NEltYWdlOlxuICAgICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUlJQUFBQXdDQVlBQUFEZEFhS0RBQUFMOEVsRVFWUjRYdTFhQzNCVnhSaytQTUliWkVEQmxvY290YnlzUUNCZzhUbHRxYS9XR1IvaGpVM0l2VG1YYUNLeHRoWGEyclIxRXBUS3l3RFpFR0I0MlNHMUZxeUtNeFFHRkZxUUd5R09WQ1ZBTU1peklFVGV6KzMzbjdQblp2Tno3cjNuUm1rRGM3NlpiL2FjUGYvdTdQNy92N3YvN2g3RDhPSERodzhmUG56NDhPSERodzhmUG56NDhPSGpXb00waklhYkJ3NGNBYjRaSGpCZ0R5Z3BwWGZLcCsrOGpJOXJESnNHRGJvWlJnK0Q3NE9qTmc0ZTNKbnlLYVYzbFI4bU9WN1d4elVDNVFSN3dmSDhtdzc2VG5LK00xeEJ5RkNvZ3d3RzAyUm01aUp3QzNnRVBBZCtDWmFEcitMN2d6SXY3eHVkbm91RHh2TGlZTU9MODlPVHF2QzhVR1FhRStZR2pEdnk4dHlYQWVVTVpYVmRKb3FEeFVORXBoRGdkdkFrdUFHOG5zdlZSMGhETmtENzcwVjc1NEVWNENud0RMaVQ4b3JNb29HOGpHZVFZV0hrVW1WMDZZRTdwR21tODNycUNoai9Bb3d2WGJnQ3htN0E1UW0wVEZETXdQTmpZVTVvVGdjb2NUa1VKam1SdjVETDF6Zk1EY3p0akxhdTRtMW52QVFXNXVYbE5lYmxQUUhHclFJL2dvRXpNZXFIeUVDZ005NWJXRTZTbmQwR3p6MlJQeHBjanVmemxrT1k1aHN5TGEwWnJ5c1J6QnRudENhamwyUTBQSVJaNFBZaTB4aU85eG1hTStUeU1nUnlnckxrNUJVOFB4cGc2SDVRMEJkS1dSZkJGUmc5NlNVWkpUZXB2R084VEgwQzJub3IybmhZdGZWTDhIZlVwMWxaczFwTnpaM2FITjk3VXg1NGdtVHc3VFZlaHlmQXNHK0MyM20rRzdDRTNBYlpuV3AyS09YZkU4R3NMS01MR2J3NDJPQWpKdy9PTUZSemhJTzZ2SU1QKy9mL05zVUtQTjhOR0VtOW9Kei9LQ1Z1aGRMNlVqNmVlK0k1MjNFT1hxNitZRUhhZ21abzN5ZXFuV1dZMlRvaFRRWC9BVmFEeDhEM1lmejdhV2tROW5KQnNpYXZLeTR3MGw5UWhqME5YZ0F2Z1dmQlBXUnNpZzFxeVlkQ2R5cDVpVytQNjk4U0FXYUJYcllqR0d1Y1BEdy9vemxDdFM3dllGdWZQazNnQ0dkNFBnZU5GaWprMzBveDYyZ0VxZEgxanNwemVKcVhyUzlBMjM2bTJuZ1E3TzdTOWdqUnR6SENuaG5vdmJyd3FjTDJ2TDZZZ0RGVElvYU54bUJ3WWtRK0s2dVY5bTJqWHBkWGxLWWFqV0QwSVdUd3VZRkd5NTE4dkJkcWp2Q2hYc2FCMXhrQm8yU3lVc29lVWdyZUg4SHpWMHlCaUZIRUFWN1dLOUNPTExXMXJRS3J3ZlBncGJCOUJoS045TDE4Uzc5K3QvTDZPSVE5OHFtZHVjSU9jdW41dEVwWDBJdzNlL3pzVzlUN3A5cHlSNXpFNjRzTHJQbXpMak4rYlI2SnlBWUNQOUR5UFk4bUdQYTM0Qm5OMEJhWGpHNzVyaU9EcFdHWjlnM1RudkZuNUdXWFpCanRIQmt2TVFJVTFGSFl1d0lhS1kvUjFJbm5zNXFTZE03bjViMENCajNuWW1oUFJEOVc4dm80MExZcWFxTXlOaTBERkFPc1Ixb09KcEdNNnF2bElLb014UkgwbnZnZ2xhbXBUV0RVZFM0TzROQWFnVllBR1F5dTEvSjM4YnFpUVJrV2hqRkNtQTBtSXMxL2JXVHJ2N3gzZDg4eVIyWk95T2dQbVRYZ0plWXc2TGhoZFR6c1lkY0FaVDJubEZHT0plRkdwRWZWTzNFM3ZvOUQyclUwdGJRUkw1c0kwSlpUNE1VUFVsSlN3QzRiQnc5dWcvY2t0eDFQYVdwcUk4ckg5elBLR1U1d0dRNmgxdnlaMlRPYmlwclpiRGN0QTVyTTh5ci9FL1crUzcyN0xxMXhJWE56bTJObUdHT04rRkNvbXh3N3RpV01ubVVaM0RTbldES1ptWVhNUWFieGVxSkJHYlJLejZQekFDaWtMTXdPa3hCSXduakdLRGhMc2VZTXVTUkg4dkhPRWFDRXpVb1pwclpFRVBmRE1icHcrYm9DYmRrUFhrTGMwZ3JwY1dlMGUrUUZYaDhIRFA0dnJlME9hVGxMcGU4SUh1OFRhcWxBUHlmQ1lkcG9jaWQ1ZlFsQjBuYlJOS2NqM2ErY1lJRWNONjQxbktLRU9jRnhPRXduWGo0YWxERS9CM1BJcUREeUdKcnlZNTBzemg1djlIQWNZVzZnd2NrUFV2cnZpM2V5U1BHQXNQZlVGK2Fuejc4QjZUNU5PWW12bXpHQU5tOXpNYkJYeHAwUjRBZy9aVTVnRWZrallmaGhtaE5zUXRvQytiL1M1Q3A0Zlo2QnFiOHhESHhLR1ZxQXlaWVRtT1pxNWdUa0lBa2RMTUdZNTdUUjdmQmc0Vk5HKzJoM0RVdEd0MzFVbDEvNVFJL2JlYjBjRkJNb1JXeFFXNnFJQXFHd1Y0UjlNTE1mUEM5b3lUQkZXTTBhQ1o4d1lva1NMZ2IyeWtwZW54dlFoOThMRmU4STI4Ry9RbnRmVU0rVXR3cEJZanM2TkJNMThRRnhFYThySWNESW4xbUdEZ1R1dHQ1Tjh3a1hKOGpuNWVJQmNVR0ppeVBROXZGKytrN1QvY0lubTIwVW1RMHV6azl2ZkdIcHFGWnkyYkMycDNTbjRYVzZBUXI0azFKRUhoc2g4YmdYQ3YwT3J5OFdWRXp3bVl1UjNVaTdCWW9wRG9NN3daL3orcndDYlgyUjJveitGZFBSTTIyTmhiM0RvQU16cHovVzhsRm53TkJUbGNFRDFqc0NIRHcvaktYaHVZaVRaR2F1bGRuWlRYblpXSUFocndPM2MwY0E3OUprb2gwNUU5L1I2NHNHS0dDdFV0SlFwS1hNMkdYSXowRGFGVXlpUUJLakswM1VCSlBsaVJ6Umh1M3Q0ejRYbzhlaTUrMWpOSWlhODRVWjJEWGNqUFNRZWk5U2FTWDFqNWRMQ05vTWNORXlmREE0THZJdFBmMEdXUk03VE5mTGVjSE1RTHZPT2M4OHVEU1lPM3ozbFBFZExhTzNmN0h5a0ZFZ1Z4bjVrbUlIYm55ZEUzaDlib0FDRHBBeWFGc0ZvNytoRkhNY0JnL1M2T0h5Qkh6TFVuSzBmRVQ2R3cvaEs3eDlqQVpzSjN1bzlxNUZlL3M0YlJmMmNuRWEvYjZIbDBrWU1QTDEwajVaMUplRG5NaDMwM3hXNWRGRlZYZTliRXhNbGUyTXlYSU5qTDRCNmJCWFE4MVhrNEhidlZUUkdVN3dFTGlVR2I0Q3hEN2FvT1doaW1JSlhxVWJoQjFWU3hyWmNJWTc4UHdXMXMvYmtLWkNRWDhYOXQ2Y2dxeFB3Vi9RRnJMSVBuRzBsSW5uOTNpZDBSQyt3dHZIV0VCYkVYaUxhdlN6b2JCdkl4MW5xUE9TY3hsZzdHTG1DSHNpM3pJeWJvcmttK1p2OUhKUmtTY2JXazR3V1U2em5nMXJHZmlyTXZoZThEQjRWbmNFeEE2UDhHcThBSW80UndwWmtMYWdMYjNUemtGRjFZNmlkc0hZMzBlYW85Nm5xZU5vNS90eFhtYzBoSy93OWpFVzBJZFoxRjZrdmRrV09YSmsvN1dCUUxFakRIMVVjNFRJQ1NMZE9tcU80RzMwVEpZanJKbEFPUUVCMjhkbmxkRVJ2UnRIQklzUGNpYjhPRnV2d2l1RWZTNHZhUmFnOStMYTE4OTB1a2luY3Y4VU5UZDZ4MmoyMEdUTzhUcWpJWHlGdDQreG9BN0Z5QkV5ME5mK2VoOHh5elhoOG5XR3RaV2tBeWJiNEtzaithSFFmWnFEZktHWGlZb0MrVGFtL2lmMHJFVmpqWlkwNVF2N0ZMRWFQSzA3UXRjL2hKZnA4bDRCUld4VUNyR0NYVkZ6MUx5YWJ1ODB1UmJDdnBrOHlzN29JOGZwOGZDLzJENUdnNXJWcUwydm8xK0RoUDJ6amRPSDczSDVoQUREVHBMT1B3YzFQQWttYXpJcnRXOXhid0V0Rk1nRHhzdnlScDZOV2VHSE1IcWxzTThZeUNGT2dCL25aZmVlaERLN3Vid1hRQWt6bE9HdDJRclAyOVQ3UFVpVHlPZ1lUU08wbVFLeGlUQTFKVzdsZFViRC8ydjdTRkJYMU5iOUF5ZjZkaStYOXd5TStnY3M0d2FEbTVCT1Evb0swdGxZSmlLSE9KQjVram1KdDV1N0FubldFTkw3ZG1hbWJJb3luaSswZEVBUmd4MkZ3UGlQZ1hDMnFCZE9XekdhdWduN2R5OG5iekd2TXhZMnA2VGNBcU9XZzJ2S2twTXprZDYxdFcvZlRraTk5N2VPZ01FZlJYdjNhbTNmaWJ5WmRLN0FaVDBCQmswQ0syaUUweDlLL0R2QittZlIvbWVCSE1EK09TVVlYTS9sWEZFZ0R4cFRaQWVlSFJVRnNodFk2MTRpRWRBeW9CUkRGelVQcTEzRDM0UjlJYk1GZkIweUl4ZU5YZFNTbmpWRmt2TU01L1hWWjZpYlNTZmVxVVQ3cDlPZEE1ZnpCQmoxYVdYZ2RWYWdTTGVNZExRY0NQUkMzaWhKdjZiWlA2eEVna2NyTmMwUXI4c1Y5am5CUXp3N0tncGtDRnpDczcyQ0ltbFJleFo0aXd5c1JuOExjZ0M4RHkyNi9GTG5jN3JwNC9YVloyQUdlSnYxZ1ZpMzQyVVk5RjNOeUY3NU1kaUMxK1dLZkpuajJiQjVzZ25rZDRCMVgrY01hNGtJdUNnb0ZzOURxVC9pOWRSM29OM0hxZjNGOXIrWjFoa0tlSmpMZVFJY1lhU0xvV054QjExVjgzcWlJaysyZ1NQc0F3ZndUNWVoUU02QkU5UnB4OEJSWFBOZlFqeWVnMndhTDM4MVFOZ0hTOVNIcDdYK2VONzVYQVlZZDdHTHdUbHBCekdOL2xYZzVlT2lRRDRPVmhwL2xPN1h5RFFUa0JOTWxtVjRybHV3NHdJWStDZENIVHRIWVJXV2pEdDV1YXNGYVA5TExuMUtLT0N0QmV2SGxHQndvYVNBMFk0SDZEcjZnTnBGekVNNkZ1bDF2RnhDeUpkQkdQc1EwbCtDMzdYeVhwYmRZWHdUK1JYV1RQQU5Pb0VEWWQvVjAxL0xhNFFkV05IcEkyMHJuNmQ0Z2N0ZlRhRERJL1RqMThJK01xYy9tdWlubkc5eHVmcUhmTmtiaGkreFpvY0NLUTA2THlpUWk3OXVUT0REaHc4ZlBuejQ4T0hEaHc4ZlBuejQ4T0hEaDQ5dkdQOEZYZGxIZHZ3U1M3c0FBQUFBU1VWT1JLNUNZSUk9JyxcbiAga2V5OiAnODg0NmI2MThjYmFjNGRhMTlmNzc0OTg3YzQ2YmMxMGYnLFxufTtcblxuY29uc3QgbG9naW5SZXN1bHQgPSB7XG4gIHVzZXJJZDogJzEnLFxuICB0b2tlbjpcbiAgICAnZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhkV1FpT2lMbHViUGxqN0Rsa0kwaUxDSnBZWFFpT2pFMk5EWTNNamN5TkRFc0ltbHpjeUk2SXVldHZ1V1BrZWFjdXVhZWhDM2xwS25uaVp2bnA1SG1pb0FpTENKdVltWWlPakUyTkRZM01qY3lOREVzSW5OMVlpSTZJakV3TURFek5qa3lJaXdpYW5ScElqb2lObVJsWlRVeVlXTXRNalEzTmkwMFltUTVMVGcyTlRJdE16UmhaV1F6WldNMFlqWTJJbjAuZWVwampUUGUwamFfTHN0M0JqbkxkWnoxQ0dGMDNnMkVPNUhoT1dBTmh0RjRwQ0NvSjBCNnVhcWxBeWZBWFdFWXRlMENScFljN1hRQ1lQVzI4cExNVzFIWEQ2QVQyaHp6N3QtNm5WNVZNQ0VKNjZ5X2ZsZUZJSVVzQ2VwaVBsUTZ5UEJheWItR19CYi1kWDVpMVRacEFzN0pLNmxjY08xdnBPMkF5ci1QNTdWVUtOcFFHbk93Vko3dkUzbHdZRFhmMU5jVVh2U3JkSUlOc3c1MVRWR2RFX3V3QV90RVdselZqT2sxRnBFbzBpQXpsZXViX05VMEF4QTlZeWRySVBjWTd4M040ZkdsSFJPMDRvMkhKZTA4OEp5Y3BsTWNtQVlJeTRmR1NRa1l0YnJTMmd5VVVFbkFNcXJNMm1JMTIxV0hSOFZhRVhwcUJxTDVBSGhFMFBkaWR3Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgLy8gXHU3NjdCXHU1RjU1XHU2M0E1XHU1M0UzXG4gIHtcbiAgICB1cmw6ICcvYmFzaWMtYXBpL2NvbnN0YW50L3N5c3RlbS9jYXB0Y2hhJyxcbiAgICBtZXRob2Q6ICdnZXQnLFxuICAgIHJlc3BvbnNlOiAoKSA9PiB7XG4gICAgICByZXR1cm4gcmVzdWx0U3VjY2VzcyhjYXB0Y2hhSW5mbyk7XG4gICAgfSxcbiAgfSxcbiAgLy8gXHU3NjdCXHU1RjU1XHU2M0E1XHU1M0UzXG4gIHtcbiAgICB1cmw6ICcvYmFzaWMtYXBpL2NvbnN0YW50L3N5c3RlbS9sb2dpbicsXG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgcmVzcG9uc2U6ICgpID0+IHtcbiAgICAgIHJldHVybiByZXN1bHRTdWNjZXNzKGxvZ2luUmVzdWx0KTtcbiAgICB9LFxuICB9LFxuXSBhcyBNb2NrTWV0aG9kW107XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBR08sU0FBUyxjQUE4QixRQUFXLEVBQUUsVUFBVSxLQUFLLElBQUksQ0FBQyxHQUFHO0FBQ2hGLFNBQU87SUFDTCxNQUFBO0lBQ0E7SUFDQTtJQUNBLE1BQU07RUFDUjtBQUNGO0FDUEEsSUFBTSxjQUFjO0VBQ2xCLGFBQ0U7RUFDRixLQUFLO0FBQ1A7QUFFQSxJQUFNLGNBQWM7RUFDbEIsUUFBUTtFQUNSLE9BQ0U7QUFDSjtBQUVBLElBQU8saUJBQVE7O0VBRWI7SUFDRSxLQUFLO0lBQ0wsUUFBUTtJQUNSLFVBQVUsTUFBTTtBQUNkLGFBQU8sY0FBYyxXQUFXO0lBQ2xDO0VBQ0Y7O0VBRUE7SUFDRSxLQUFLO0lBQ0wsUUFBUTtJQUNSLFVBQVUsTUFBTTtBQUNkLGFBQU8sY0FBYyxXQUFXO0lBQ2xDO0VBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
