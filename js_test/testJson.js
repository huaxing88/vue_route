
const choosehostList = [
    {ip: '0.0.0.0'},
    {ip: '0.0.0.1'},
    {ip: '0.0.0.2'},
    {ip: '0.0.0.1'},
]

const userInfo= {
    ips: choosehostList.length > 0 ? Array.from(new Set((choosehostList.map(item => item.ip)))).join(',') : '',
}

const userInfo1 = {
    ips: JSON.stringify(choosehostList.map(item => item.ip))
}

const userInfo2 = {
    ips: JSON.stringify(Array.from(new Set(choosehostList.map(item => item.ip))))
}

console.log(JSON.stringify(userInfo));
console.log(JSON.stringify(userInfo1));
console.log(JSON.stringify(userInfo2));
    

const collectionsList = [{"url": "/ControlDesk/flow", "title": "工单状态"}, {"url": "/ControlDesk/auth", "title": "工单申请"}]
if (collectionsList.length > 0) {
    collectionsList.map(item => {
        const newMenuList =  menuList.map(menuitem => {
        if(menuitem.children.length > 0) {
          menuitem.children.map(subItem => {
            if (subItem.path == item.url) {
              subItem.isCollection = true
            }
          })
        }
        console.log(menuitem);
      })
    })
}
