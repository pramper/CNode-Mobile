const xhr = new  XMLHttpRequest()
// 获取topic信息
var fetchMsg = function(url, method, queryObj) {
    if(queryObj) {
        url = mergeQuery(url, queryObj)
    }
    return new Promise((resolve, reject) => {
        xhr.open(method, url, true)
        xhr.send(null)
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status>=200 && xhr.status<300) {
                    resolve(xhr.responseText)
                } else {
                    reject(new Error("请求出错！"))
                }  
            }
            
        }
    });
    
}
// 登录
var login = function(token) {
    return new Promise((resolve, reject) => {
        xhr.open("post", "https://cnodejs.org/api/v1/accesstoken", true)
        // 下面这不很重要，模仿表单的提交
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded") 
        xhr.send("accesstoken=b30f3e4b-9468-4790-9e33-305e1b4a4e34")
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4) {
                if(xhr.status>=200 && xhr.status<300) {
                    resolve(xhr.responseText)
                }
            }
        }
    })
    
}
// 把url和query连接成字符串
function mergeQuery(url, queryObj) {
    url += "?"
    for(let key in queryObj) {
        if(queryObj.hasOwnProperty(key)) {
            url += (key+'='+queryObj[key]+'&')
        }
    }
    return url
}

export {fetchMsg, login}