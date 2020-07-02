## TomTodo 单页Todo应用

一个基于React & React-Redux & Redux的todo应用

在Dribbble上看到了一个很好看的Todo App的设计，就想着能不能实现它。

偶然看见Youtube上有用Vue部分实现的例子，不过功能并没有完全实现，就想自己使用React做一个基本功能齐全的。

### 设计来源

https://dribbble.com/shots/3812962-iPhone-X-Todo-Concept

###  功能

- 单页TodoAPP
- 根据Todo主题进行背景颜色切换，由touch事件触发
- 不同的Todo主题根据Task完成情况和是否删除实现Todo详情页
- 可自行编辑新的Task

### 技术栈

- React：使用ES6语法，使用Hook进行优化
- Redux：没有异步Action，故没有使用中间件
- React-Redux：尽量分离UI和操作逻辑
- React-Hook: 使用useMemo进行优化
- SCSS：利用预处理器实现VUE类似CSS的Scope的效果，没有使用Style-Component
- CSS3:  实现浮动按钮的过渡

### 遇见的问题

在实现的过程中还是遇到不少问题，参考的例子利用VUE实现了UI，但操作逻辑基本没有实现，特别是很多问题是在自己进行真正的使用过程中发现的。

好在都一一解决了。

1. img标签图片问题

2. Appbar 的左icon在首页点击问题，加入一个selected判断解决

3. 一个bug解决了一上午，发现是TodoLidst组件和TodoDetail组件渲染数据不一致导致，在进行页面增加删除操作的时候，TodoDetail页面不会根据props更新组件，需要返回到TodoList组件选择Todo在能更新。重写了TodoList的选择逻辑和TodoDetail的数据来源解决。

4. 一个bug通过currentIndex选择Todo的的逻辑有问题，导致在最左右两端无法选择到Todo，重写reducer的PREV_TODO和NEXT_TODO，改用余数。

5. 一个bug，在使用的时候发现，如果所有认为都完成并删除，Todo组件的进度条num会出现0/0 返回NaN的情况，让progress函数不返回字符串返回数字，渲染时进行falsy值判断解决。

### 总结

- 加深理解：自己先学习了一段时间VUE，再来学习React的。MVVM框架的很多思想都很相似，做了几个项目真正的理解了为什么Action中的参数为什么要取名为Payload，Payload就像是一个搬运工将页面信息和外部请求数据搬进页面的状态管理数据。
- 解决问题：锻炼自己解决问题的能力，发现问题 -> 找到来源 -> 解决思路。用好google很重要，能在ISSUE和Overstackflow里找到到大部分问题的答案，果然很多坑前人都已经踩过了。

### 不足

- 自己很难把握整个App的功能来设计原始State，导致添加一个功能或修改一个bug时，要改变State的整体结构设计。牵一发而动全身，导致解决一个问题，要重写很多操作逻辑和重新对页面渲染的数据进行处理。

### 后续

1. 学习完Hook后重写项目。
2. 使用react-transition-group添加过度动画。
3. 考虑将Todo组件拆封
4. 添加mouse事件（已完成）