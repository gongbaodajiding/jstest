let that;
let flag = true;

class Tab {
    constructor(id) {
        // 获取元素
        that = this;
        this.main = document.querySelector(id);
        this.create = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('.firstnav ul');
        this.tabscon = this.main.querySelector('.tabscon');
        this.init();
    }

    init() {
        // 获取动态添加的元素
        this.updateNode();
        // 初始化时给元素添加绑定事件
        this.create.addEventListener('click', this.createTab);
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            // 这里的this指向Tab，toggleTab函数内部的this指向调用该函数的元素
            this.lis[i].addEventListener('click', this.toggleTab);
            this.remove[i].addEventListener('click', this.removeTab);
            this.spans[i].addEventListener('dblclick', this.updateTab);
            this.sections[i].addEventListener('dblclick', this.updateTab);
        }
    }

    updateNode() {
        // 由于动态添加了元素，需要重新获取
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll('.firstnav li span:first-child');
    }

    toggleTab() {
        // 先清除其他的样式，只保留自己的
        that.clearClass();
        this.className = 'liactive';
        // 这里不能用this，因为this指向的是调用该函数的li，所以用that代替this指向Tab
        that.sections[this.index].className = 'conactive';
    }

    clearClass() {
        // 这里函数被that调用，this指向Tab
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }

    createTab() {
        // 如果用createElement，需要innerHTML赋值后再添加，比较麻烦
        // 可以用insertAdjacentHTML直接添加字符串格式的元素
        that.clearClass();
        let timestamp = new Date();
        let li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        let section = '<section class="conactive">测试 ' + timestamp + '</section>';
        that.ul.insertAdjacentHTML('beforeend', li);
        that.tabscon.insertAdjacentHTML('beforeend', section);
        // 创建新元素后，再次获取并绑定事件
        that.init();
    }

    removeTab(ev) {
        // 阻止事件冒泡，避免触发li切换事件报错
        ev.stopPropagation();
        // 获取父亲li的索引，删除对应的li和section
        let index = this.parentNode.index;
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        // 当我们删除的不是选中状态的li的时候,原来的选中状态li保持不变
        if (document.querySelector('.liactive')) return;
        // 当我们删除了选中状态的li时, 让它的前一个li处于选定状态
        index--;
        // 手动调用点击事件，即可选中前一个li
        // 当删除的是第一个时，选中后一个
        that.lis[index] ? that.lis[index].click() : that.lis[index + 1].click();
    }

    updateTab(ev) {
        ev.stopPropagation();
        // 加入节流阀防止双击再次触发
        if (flag) {
            flag = false;
            // 获取现在的内容
            let str = this.innerHTML;
            // 双击禁止选定文字
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            // 双击后将span内容换成输入框
            this.innerHTML = '<input type="text" />';
            // 将之前的内容赋给输入框
            let ipt = this.children[0];
            ipt.value = str;
            ipt.select();
            // 当输入框失去焦点时就把里面的值给span
            ipt.addEventListener('blur', function () {
                this.parentNode.innerHTML = this.value;
                flag = true;
            });
            // 按下回车也可以把文本框里面的值给span
            ipt.addEventListener('keyup', function (ev) {
                if (ev.keyCode === 13) {
                    // 手动调用失去焦点事件
                    this.blur();
                }
            });
        }
    }
}

new Tab('#tab');