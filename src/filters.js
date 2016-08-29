/**
 * 获取标签样式
 * @param  {[string]} tab  目前官方提供的tab分类为['share', 'job', 'ask']
 * @param  {[boolean]} top  是否是置顶帖
 * @param  {[boolean]} good 是否值精华帖
 * @return {[string]}      返回相应的标签样式的类名
 */
var getTabClass = function(tab, top, good) {
    let className = ''
    if(top) {
        className = 'top'
    } else if(good) {
        className = 'good'
    } else {
        switch(tab) {
            case 'share':
                className = 'share'
                break
            case 'job':
                className = 'job'
                break
            case 'ask':
                className = 'ask'
                break
        }
    }
    return className
}

var formatTime = function(time) {
    let date = new Date(time)
    let milliseconds = date.getTime() // 获取时间的毫秒数
    let differ = parseFloat((Date.now() - milliseconds)/1000)  // 计算当前时间到time的时间差，换算成秒
    let formatedTime = ''
    if(differ <= 60) {
        formatedTime = '刚刚'
    } else if(differ>60 && differ<3600) {
        let minutes = Math.floor(differ/60)
        formatedTime = `${minutes}分钟前`
    } else if(differ>=3600 && differ<24*3600) {
        let hours = Math.floor(differ/3600)
        formatedTime = `${hours}小时前`
    } else if(differ>=24*3600 && differ<30*24*3600) {
        let days = Math.floor(differ/(24*3600))
        formatedTime = `${days}天前`
    } else {
        formatedTime = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    }
    return formatedTime
}
export {getTabClass, formatTime}