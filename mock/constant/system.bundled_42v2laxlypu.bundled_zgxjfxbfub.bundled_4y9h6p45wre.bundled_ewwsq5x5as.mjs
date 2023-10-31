// mock/constant/system.bundled_42v2laxlypu.bundled_zgxjfxbfub.bundled_4y9h6p45wre.mjs
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9jb25zdGFudC9tb2NrL2NvbnN0YW50L21vY2svY29uc3RhbnQvbW9jay9fdXRpbC50cyIsICJtb2NrL2NvbnN0YW50L21vY2svY29uc3RhbnQvbW9jay9jb25zdGFudC9tb2NrL2NvbnN0YW50L3N5c3RlbS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJDOlxcXFxVc2Vyc1xcXFx0Y2xpXFxcXERlc2t0b3BcXFxcdnVlLXZiZW4tYWRtaW5cXFxcbW9ja1xcXFxfdXRpbC50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCJDOlxcXFxVc2Vyc1xcXFx0Y2xpXFxcXERlc2t0b3BcXFxcdnVlLXZiZW4tYWRtaW5cXFxcbW9ja1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vQzovVXNlcnMvdGNsaS9EZXNrdG9wL3Z1ZS12YmVuLWFkbWluL21vY2svX3V0aWwudHNcIjsvLyBJbnRlcmZhY2UgZGF0YSBmb3JtYXQgdXNlZCB0byByZXR1cm4gYSB1bmlmaWVkIGZvcm1hdFxuaW1wb3J0IHsgUmVzdWx0RW51bSB9IGZyb20gJy9AL2VudW1zL2h0dHBFbnVtJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc3VsdFN1Y2Nlc3M8VCA9IFJlY29yZGFibGU+KHJlc3VsdDogVCwgeyBtZXNzYWdlID0gJ29rJyB9ID0ge30pIHtcbiAgcmV0dXJuIHtcbiAgICBjb2RlOiBSZXN1bHRFbnVtLlNVQ0NFU1MsXG4gICAgcmVzdWx0LFxuICAgIG1lc3NhZ2UsXG4gICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzdWx0UGFnZVN1Y2Nlc3M8VCA9IGFueT4oXG4gIHBhZ2U6IG51bWJlcixcbiAgcGFnZVNpemU6IG51bWJlcixcbiAgbGlzdDogVFtdLFxuICB7IG1lc3NhZ2UgPSAnb2snIH0gPSB7fSxcbikge1xuICBjb25zdCBwYWdlRGF0YSA9IHBhZ2luYXRpb24ocGFnZSwgcGFnZVNpemUsIGxpc3QpO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucmVzdWx0U3VjY2Vzcyh7XG4gICAgICBpdGVtczogcGFnZURhdGEsXG4gICAgICB0b3RhbDogbGlzdC5sZW5ndGgsXG4gICAgfSksXG4gICAgbWVzc2FnZSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc3VsdEVycm9yKFxuICBtZXNzYWdlID0gJ1JlcXVlc3QgZmFpbGVkJyxcbiAgeyBjb2RlID0gUmVzdWx0RW51bS5FUlJPUiwgcmVzdWx0ID0gbnVsbCB9ID0ge30sXG4pIHtcbiAgcmV0dXJuIHtcbiAgICBjb2RlLFxuICAgIHJlc3VsdCxcbiAgICBtZXNzYWdlLFxuICAgIHR5cGU6ICdlcnJvcicsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWdpbmF0aW9uPFQgPSBhbnk+KHBhZ2VObzogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBhcnJheTogVFtdKTogVFtdIHtcbiAgY29uc3Qgb2Zmc2V0ID0gKHBhZ2VObyAtIDEpICogTnVtYmVyKHBhZ2VTaXplKTtcbiAgcmV0dXJuIG9mZnNldCArIE51bWJlcihwYWdlU2l6ZSkgPj0gYXJyYXkubGVuZ3RoXG4gICAgPyBhcnJheS5zbGljZShvZmZzZXQsIGFycmF5Lmxlbmd0aClcbiAgICA6IGFycmF5LnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgTnVtYmVyKHBhZ2VTaXplKSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgcmVxdWVzdFBhcmFtcyB7XG4gIG1ldGhvZDogc3RyaW5nO1xuICBib2R5OiBhbnk7XG4gIGhlYWRlcnM/OiB7IGF1dGhvcml6YXRpb24/OiBzdHJpbmcgfTtcbiAgcXVlcnk6IGFueTtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gXHU2NzJDXHU1MUZEXHU2NTcwXHU3NTI4XHU0RThFXHU0RUNFcmVxdWVzdFx1NjU3MFx1NjM2RVx1NEUyRFx1ODNCN1x1NTNENnRva2VuXHVGRjBDXHU4QkY3XHU2ODM5XHU2MzZFXHU5ODc5XHU3NkVFXHU3Njg0XHU1QjlFXHU5NjQ1XHU2MEM1XHU1MUI1XHU0RkVFXHU2NTM5XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVxdWVzdFRva2VuKHsgaGVhZGVycyB9OiByZXF1ZXN0UGFyYW1zKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGhlYWRlcnM/LmF1dGhvcml6YXRpb247XG59XG4iLCAiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJDOlxcXFxVc2Vyc1xcXFx0Y2xpXFxcXERlc2t0b3BcXFxcdnVlLXZiZW4tYWRtaW5cXFxcbW9ja1xcXFxjb25zdGFudFxcXFxzeXN0ZW0udHNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiQzpcXFxcVXNlcnNcXFxcdGNsaVxcXFxEZXNrdG9wXFxcXHZ1ZS12YmVuLWFkbWluXFxcXG1vY2tcXFxcY29uc3RhbnRcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0M6L1VzZXJzL3RjbGkvRGVza3RvcC92dWUtdmJlbi1hZG1pbi9tb2NrL2NvbnN0YW50L3N5c3RlbS50c1wiO2ltcG9ydCB7IE1vY2tNZXRob2QgfSBmcm9tICd2aXRlLXBsdWdpbi1tb2NrJztcbmltcG9ydCB7IHJlc3VsdFN1Y2Nlc3MgfSBmcm9tICcuLi9fdXRpbCc7XG5cbmNvbnN0IGNhcHRjaGFJbmZvID0ge1xuICBiYXNlNjRJbWFnZTpcbiAgICAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJSUFBQUF3Q0FZQUFBRGRBYUtEQUFBTDhFbEVRVlI0WHUxYUMzQlZ4UmsrUE1JYlpFREJsb2NvdGJ5c1FDQmc4VGx0cWEvV0dSL2hqVTNJdlRtWGFDS3h0aFhhMnJSMUVwVEt5d0RaRUdCNDJTRzFGcXlLTXhRR0ZGcVFHeUdPVkNWQU1NaXpJRVRleiszM243UG5adk56N3IzblJta0RjNzZaYi9hY1BmL3U3UDcvdjd2LzdoN0Q4T0hEaHc4ZlBuejQ4T0hEaHc4ZlBuejQ4T0hqV29NMGpJYWJCdzRjQWI0WkhqQmdEeWdwcFhmS3ArKzhqSTlyREpzR0Rib1pSZytENzRPak5nNGUzSm55S2FWM2xSOG1PVjdXeHpVQzVRUjd3Zkg4bXc3NlRuSytNMXhCeUZDb2d3d0cwMlJtNWlKd0MzZ0VQQWQrQ1phRHIrTDdnekl2N3h1ZG5vdUR4dkxpWU1PTDg5T1RxdkM4VUdRYUUrWUdqRHZ5OHR5WEFlVU1aWFZkSm9xRHhVTkVwaERnZHZBa3VBRzhuc3ZWUjBoRE5rRDc3MFY3NTRFVjRDbndETGlUOG9yTW9vRzhqR2VRWVdIa1VtVjA2WUU3cEdtbTgzcnFDaGovQW93dlhiZ0N4bTdBNVFtMFRGRE13UE5qWVU1b1RnY29jVGtVSmptUnY1REwxemZNRGN6dGpMYXU0bTFudkFRVzV1WGxOZWJsUFFIR3JRSS9nb0V6TWVxSHlFQ2dNOTViV0U2U25kMEd6ejJSUHhwY2p1Znpsa09ZNWhzeUxhMFpyeXNSekJ0bnRDYWpsMlEwUElSWjRQWWkweGlPOXhtYU0rVHlNZ1J5Z3JMazVCVThQeHBnNkg1UTBCZEtXUmZCRlJnOTZTVVpKVGVwdkdPOFRIMEMybm9yMm5oWXRmVkw4SGZVcDFsWnMxcE56WjNhSE45N1V4NTRnbVR3N1RWZWh5ZkFzRytDMjNtK0c3Q0UzQWJabldwMktPWGZFOEdzTEtNTEdidzQyT0FqSncvT01GUnpoSU82dklNUCsvZi9Oc1VLUE44TkdFbTlvSnovS0NWdWhkTDZVajZlZStJNTIzRU9YcTYrWUVIYWdtWm8zeWVxbldXWTJUb2hUUVgvQVZhRHg4RDNZZno3YVdrUTluSkJzaWF2S3k0dzBsOVFoajBOWGdBdmdXZkJQV1JzaWcxcXlZZENkeXA1aVcrUDY5OFNBV2FCWHJZakdHdWNQRHcvb3psQ3RTN3ZZRnVmUGszZ0NHZDRQZ2VORmlqazMwb3g2MmdFcWRIMWpzcHplSnFYclM5QTIzNm0ybmdRN083UzlnalJ0ekhDbmhub3ZicndxY0wydkw2WWdERlRJb2FOeG1Cd1lrUStLNnVWOW0yalhwZFhsS1lhaldEMElXVHd1WUZHeTUxOHZCZHFqdkNoWHNhQjF4a0JvMlN5VXNvZVVncmVIOEh6VjB5QmlGSEVBVjdXSzlDT0xMVzFyUUtyd2ZQZ3BiQjlCaEtOOUwxOFM3OSt0L0w2T0lROThxbWR1Y0lPY3VuNXRFcFgwSXczZS96c1c5VDdwOXB5UjV6RTY0c0xyUG16TGpOK2JSNkp5QVlDUDlEeVBZOG1HUGEzNEJuTjBCYVhqRzc1cmlPRHBXR1o5ZzNUbnZGbjVHV1haQmp0SEJrdk1RSVUxRkhZdXdJYUtZL1IxSW5uczVxU2RNN241YjBDQmozblltaFBSRDlXOHZvNDBMWXFhcU15TmkwREZBT3NSMW9PSnBHTTZxdmxJS29NeFJIMG52Z2dsYW1wVFdEVWRTNE80TkFhZ1ZZQUdReXUxL0ozOGJxaVFSa1doakZDbUEwbUlzMS9iV1Rydjd4M2Q4OHlSMlpPeU9nUG1UWGdKZVl3NkxoaGRUenNZZGNBWlQybmxGR09KZUZHcEVmVk8zRTN2bzlEMnJVMHRiUVJMNXNJMEpaVDRNVVBVbEpTd0M0YkJ3OXVnL2NrdHgxUGFXcHFJOHJIOXpQS0dVNXdHUTZoMXZ5WjJUT2JpcHJaYkRjdEE1ck04eXIvRS9XK1M3MjdMcTF4SVhOem0yTm1HR09OK0ZDb214dzd0aVdNbm1VWjNEU25XREtabVlYTVFhYnhlcUpCR2JSS3o2UHpBQ2lrTE13T2t4Qkl3bmpHS0RoTHNlWU11U1JIOHZIT0VhQ0V6VW9acHJaRUVQZkRNYnB3K2JvQ2Jka1BYa0xjMGdycGNXZTBlK1FGWGg4SERQNHZyZTBPYVRsTHBlOElIdThUYXFsQVB5ZkNZZHBvY2lkNWZRbEIwbmJSTktjajNhK2NZSUVjTjY0MW5LS0VPY0Z4T0V3blhqNGFsREUvQjNQSXFERHlHSnJ5WTUwc3poNXY5SEFjWVc2Z3dja1BVdnJ2aTNleVNQR0FzUGZVRithbno3OEI2VDVOT1ltdm16R0FObTl6TWJCWHhwMFI0QWcvWlU1Z0Vma2pZZmhobWhOc1F0b0MrYi9TNUNwNGZaNkJxYjh4REh4S0dWcUF5WllUbU9acTVnVGtJQWtkTE1HWTU3VFI3ZkJnNFZORysyaDNEVXRHdDMxVWwxLzVRSS9iZWIwY0ZCTW9SV3hRVzZxSUFxR3dWNFI5TUxNZlBDOW95VEJGV00wYUNaOHdZb2tTTGdiMnlrcGVueHZRaDk4TEZlOEkyOEcvUW50ZlVNK1V0d3BCWWpzNk5CTTE4UUZ4RWE4ckljREluMW1HRGdUdXR0NU44d2tYSjhqbjVlSUJjVUdKaXlQUTl2RisrazdUL2NJbm0yMFVtUTB1ems5dmZHSHBxRlp5MmJDMnAzU240WFc2QVFyNGsxSkVIaHNoOGJnWEN2ME9yeThXVkV6d21ZdVIzVWk3QllvcERvTTd3Wi96K3J3Q2JYMlIyb3orRmRQUk0yMk5oYjNEb0FNenB6L1c4bEZud05CVGxjRUQxanNDSER3L2pLWGh1WWlUWkdhdWxkblpUWG5aV0lBaHJ3TzNjMGNBNzlKa29oMDVFOS9SNjRzR0tHQ3RVdEpRcEtYTTJHWEl6MERhRlV5aVFCS2pLMDNVQkpQbGlSelJodTN0NHo0WG84ZWk1KzFqTklpYTg0VVoyRFhjalBTUWVpOVNhU1gxajVkTENOb01jTkV5ZkRBNEx2SXRQZjBHV1JNN1ROZkxlY0hNUUx2T09jODh1RFNZTzN6M2xQRWRMYU8zZjdIeWtGRWdWeG41a21JSGJueWRFM2g5Ym9BQ0RwQXlhRnNGbzcraEZITWNCZy9TNk9IeUJIekxVbkswZkVUNkd3L2hLN3g5akFac0ozdW85cTVGZS9zNGJSZjJjbkVhL2I2SGwwa1lNUEwxMGo1WjFKZURuTWgzMDN4VzVkRkZWWGU5YkV4TWxlMk15WElOakw0QjZiQlhRODFYazRIYnZWVFJHVTd3RUxpVUdiNEN4RDdhb09XaGltSUpYcVViaEIxVlN4clpjSVk3OFB3VzFzL2JrS1pDUVg4WDl0NmNncXhQd1YvUUZyTElQbkcwbElubjkzaWQwUkMrd3R2SFdFQmJFWGlMYXZTem9iQnZJeDFucVBPU2N4bGc3R0xtQ0hzaTN6SXlib3JrbStadjlISlJrU2NiV2s0d1dVNnpuZzFyR2Zpck12aGU4REI0Vm5jRXhBNlA4R3E4QUlvNFJ3cFprTGFnTGIzVHprRkYxWTZpZHNIWTMwZWFvOTZucWVObzUvdHhYbWMwaEsvdzlqRVcwSWRaMUY2a3Zka1dPWEprLzdXQlFMRWpESDFVYzRUSUNTTGRPbXFPNEczMFRKWWpySmxBT1FFQjI4ZG5sZEVSdlJ0SEJJc1BjaWI4T0Z1dndpdUVmUzR2YVJhZzkrTGExODkwdWtpbmN2OFVOVGQ2eDJqMjBHVE84VHFqSVh5RnQ0K3hvQTdGeUJFeTBOZitlaDh4eXpYaDhuV0d0WldrQXliYjRLc2orYUhRZlpxRGZLR1hpWW9DK1RhbS9pZjByRVZqalpZMDVRdjdGTEVhUEswN1F0Yy9oSmZwOGw0QlJXeFVDckdDWFZGejFMeWFidTgwdVJiQ3Zwazh5czdvSThmcDhmQy8yRDVHZzVyVnFMMnZvMStEaFAyempkT0g3M0g1aEFERFRwTE9Qd2MxUEFrbWF6SXJ0Vzl4YndFdEZNZ0R4c3Z5UnA2TldlR0hNSHFsc004WXlDRk9nQi9uWmZlZWhESzd1YndYUUFremxPR3QyUXJQMjlUN1BVaVR5T2dZVFNPMG1RS3hpVEExSlc3bGRVYkQvMnY3U0ZCWDFOYjlBeWY2ZGkrWDl3eU0rZ2NzNHdhRG01Qk9RL29LMHRsWUppS0hPSkI1a2ptSnQ1dTdBbm5XRU5MN2RtYW1iSW95bmkrMGRFQVJneDJGd1BpUGdYQzJxQmRPV3pHYXVnbjdkeThuYnpHdk14WTJwNlRjQXFPV2cydktrcE16a2Q2MXRXL2ZUa2k5OTdlT2dNRWZSWHYzYW0zZmlieVpkSzdBWlQwQkJrMENLMmlFMHg5Sy9EdkIrbWZSL21lQkhNRCtPU1VZWE0vbFhGRWdEeHBUWkFlZUhSVUZzaHRZNjE0aUVkQXlvQlJERnpVUHExM0QzNFI5SWJNRmZCMHlJeGVOWGRTU25qVkZrdk1NNS9YVlo2aWJTU2ZlcVVUN3A5T2RBNWZ6QkJqMWFXWGdkVmFnU0xlTWRMUWNDUFJDM2loSnY2YlpQNnhFZ2tjck5jMFFyOHNWOWpuQlF6dzdLZ3BrQ0Z6Q3M3MkNJbWxSZXhaNGl3eXNSbjhMY2dDOER5MjYvRkxuYzdycDQvWFZaMkFHZUp2MWdWaTM0MlVZOUYzTnlGNzVNZGlDMStXS2ZKbmoyYkI1c2dua2Q0QjFYK2NNYTRrSXVDZ29GczlEcVQvaTlkUjNvTjNIcWYzRjlyK1oxaGtLZUpqTGVRSWNZYVNMb1dOeEIxMVY4M3FpSWsrMmdTUHNBd2Z3VDVlaFFNNkJFOVJweDhCUlhQTmZRanllZzJ3YUwzODFRTmdIUzlTSHA3WCtlTjc1WEFZWWQ3R0x3VGxwQnpHTi9sWGc1ZU9pUUQ0T1ZocC9sTzdYeURRVGtCTk1sbVY0cmx1dzR3SVkrQ2RDSFR0SFlSV1dqRHQ1dWFzRmFQOUxMbjFLS09DdEJldkhsR0J3b2FTQTBZNEg2RHI2Z05wRnpFTTZGdWwxdkZ4Q3lKZEJHUHNRMGwrQzM3WHlYcGJkWVh3VCtSWFdUUEFOT29FRFlkL1YwMS9MYTRRZFdOSHBJMjBybjZkNGdjdGZUYURESS9UajE4SStNcWMvbXVpbm5HOXh1ZnFIZk5rYmhpK3hab2NDS1EwNkx5aVFpNzl1VE9ERGh3OGZQbno0OE9IRGh3OGZQbno0OE9IRGg0OXZHUDhGWGRsSGR2d1NTN3NBQUFBQVNVVk9SSzVDWUlJPScsXG4gIGtleTogJzg4NDZiNjE4Y2JhYzRkYTE5Zjc3NDk4N2M0NmJjMTBmJyxcbn07XG5cbmNvbnN0IGxvZ2luUmVzdWx0ID0ge1xuICB1c2VySWQ6ICcxJyxcbiAgdG9rZW46XG4gICAgJ2V5SmhiR2NpT2lKU1V6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpoZFdRaU9pTGx1YlBsajdEbGtJMGlMQ0pwWVhRaU9qRTJORFkzTWpjeU5ERXNJbWx6Y3lJNkl1ZXR2dVdQa2VhY3V1YWVoQzNscEtubmladm5wNUhtaW9BaUxDSnVZbVlpT2pFMk5EWTNNamN5TkRFc0luTjFZaUk2SWpFd01ERXpOamt5SWl3aWFuUnBJam9pTm1SbFpUVXlZV010TWpRM05pMDBZbVE1TFRnMk5USXRNelJoWldRelpXTTBZalkySW4wLmVlcGpqVFBlMGphX0xzdDNCam5MZFp6MUNHRjAzZzJFTzVIaE9XQU5odEY0cENDb0owQjZ1YXFsQXlmQVhXRVl0ZTBDUnBZYzdYUUNZUFcyOHBMTVcxSFhENkFUMmh6ejd0LTZuVjVWTUNFSjY2eV9mbGVGSUlVc0NlcGlQbFE2eVBCYXliLUdfQmItZFg1aTFUWnBBczdKSzZsY2NPMXZwTzJBeXItUDU3VlVLTnBRR25Pd1ZKN3ZFM2x3WURYZjFOY1VYdlNyZElJTnN3NTFUVkdkRV91d0FfdEVXbHpWak9rMUZwRW8waUF6bGV1Yl9OVTBBeEE5WXlkcklQY1k3eDNONGZHbEhSTzA0bzJISmUwODhKeWNwbE1jbUFZSXk0ZkdTUWtZdGJyUzJneVVVRW5BTXFyTTJtSTEyMVdIUjhWYUVYcHFCcUw1QUhoRTBQZGlkdycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIC8vIFx1NzY3Qlx1NUY1NVx1NjNBNVx1NTNFM1xuICB7XG4gICAgdXJsOiAnL2Jhc2ljLWFwaS9jb25zdGFudC9zeXN0ZW0vY2FwdGNoYScsXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICByZXNwb25zZTogKCkgPT4ge1xuICAgICAgcmV0dXJuIHJlc3VsdFN1Y2Nlc3MoY2FwdGNoYUluZm8pO1xuICAgIH0sXG4gIH0sXG4gIC8vIFx1NzY3Qlx1NUY1NVx1NjNBNVx1NTNFM1xuICB7XG4gICAgdXJsOiAnL2Jhc2ljLWFwaS9jb25zdGFudC9zeXN0ZW0vbG9naW4nLFxuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIHJlc3BvbnNlOiAoKSA9PiB7XG4gICAgICByZXR1cm4gcmVzdWx0U3VjY2Vzcyhsb2dpblJlc3VsdCk7XG4gICAgfSxcbiAgfSxcbl0gYXMgTW9ja01ldGhvZFtdO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUdPLFNBQVMsY0FBOEIsUUFBVyxFQUFFLFVBQVUsS0FBSyxJQUFJLENBQUMsR0FBRztBQUNoRixTQUFPO0lBQ0wsTUFBQTtJQUNBO0lBQ0E7SUFDQSxNQUFNO0VBQ1I7QUFDRjtBQ1BBLElBQU0sY0FBYztFQUNsQixhQUNFO0VBQ0YsS0FBSztBQUNQO0FBRUEsSUFBTSxjQUFjO0VBQ2xCLFFBQVE7RUFDUixPQUNFO0FBQ0o7QUFFQSxJQUFPLGlCQUFROztFQUViO0lBQ0UsS0FBSztJQUNMLFFBQVE7SUFDUixVQUFVLE1BQU07QUFDZCxhQUFPLGNBQWMsV0FBVztJQUNsQztFQUNGOztFQUVBO0lBQ0UsS0FBSztJQUNMLFFBQVE7SUFDUixVQUFVLE1BQU07QUFDZCxhQUFPLGNBQWMsV0FBVztJQUNsQztFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
