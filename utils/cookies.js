/*
 * @Descripttion: 
 * @version: 
 * @author: zhoujianxiang
 * @Date: 2020-11-17 17:41:57
 * @LastEditors: zhoujianxiang
 * @LastEditTime: 2020-11-17 17:43:26
 */
export const setCookie = (cookieName, cookieValue, expireDays=30) => {
  var d = new Date();
  d.setTime(d.getTime()+(expireDays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cookieName + "=" + cookieValue + "; " + expires;
};

export const getCookie = cookieName => {
  var name = cookieName + "=";
  var cookieAmount = document.cookie.split(';');
  for(var i=0; i<cookieAmount.length; i++) 
  {do
    var c = cookieAmount[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
};

export const delCookie = cookieName => {
    var date = new Date();
    date.setTime(date.getTime() - 1);
    var delValue=getCookie(cookieName);
    if(delValue!=null)
        document.cookie= cookieName + "="+delValue+";expires="+date.toGMTString();
};
