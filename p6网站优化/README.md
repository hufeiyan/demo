## 网站性能优化项目

该项目做了如下优化：

### index.html

1. 取消引入字体
2. 将script文件引入改为异步
3. 将script的引入执行放在文档最后
4. 将style.css改为内联
5. 将print.css加入媒体查询


### img

1. 将图片进行压缩
2. 将pizzeria.jpg修改成小尺寸


### main.js
1. 将for循环条件中的变量进行先声明
2. 将for循环中的声明变量提取到for循环外面
3. 将querySelector*改成getElementBy*形式
4. 披萨滑窗参数进行修改
 
如下几处函数进行了修改：

    changePizzaSizes

    logAverageFrame

    updatePositions

    
   
