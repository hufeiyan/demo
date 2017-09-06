/* feedreader.js
 *
 * 这是 Jasmine 会读取的spec文件，它包含所有的要在你应用上面运行的测试。
 */

/* 我们把所有的测试都放在了 $() 函数里面。因为有些测试需要 DOM 元素。
 * 我们得保证在 DOM 准备好之前他们不会被运行。
 */
$(function() {
    /* 这是我们第一个测试用例 - 其中包含了一定数量的测试。这个用例的测试
     * 都是关于 Rss 源的定义的，也就是应用中的 allFeeds 变量。
    */
    describe('RSS Feeds', function() {
        /* 这是我们的第一个测试 - 它用来保证 allFeeds 变量被定义了而且
         * 不是空的。在你开始做这个项目剩下的工作之前最好实验一下这个测试
         * 比如你把 app.js 里面的 allFeeds 变量变成一个空的数组然后刷新
         * 页面看看会发生什么。
        */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO:
         * 编写一个测试遍历 allFeeds 对象里面的所有的源来保证有链接字段而且链接不是空的。
         */
        it('url are defined', function() {
            checkDefined("url")
            
        });


        /* TODO:
         * 编写一个测试遍历 allFeeds 对象里面的所有的源来保证有名字字段而且不是空的。
         */
         it('name are defined', function() {
            checkDefined("name")
            
        });

         function checkDefined(str){
            $.each(allFeeds,function(k,v){
                expect(v[str]).toBeDefined();
                expect(v[str].length).not.toBe(0);
            })
         }
    });

    
    /* TODO: 写一个叫做 "The menu" 的测试用例 */

        /* TODO:
         * 写一个测试用例保证菜单元素默认是隐藏的。你需要分析 html 和 css
         * 来搞清楚我们是怎么实现隐藏/展示菜单元素的。
         */

         /* TODO:
          * 写一个测试用例保证当菜单图标被点击的时候菜单会切换可见状态。这个
          * 测试应该包含两个 expectation ： 党点击图标的时候菜单是否显示，
          * 再次点击的时候是否隐藏。
          */

    describe('The menu', function(){
        var menuIcon = $('.menu-icon-link'),
            menu_hidden = $('body').hasClass('menu-hidden');

        //第一个it也会触发beforeEach中的函数，因此先在执行之前触发一次
        menuIcon.trigger("click");

        beforeEach(function(){
            menuIcon.trigger("click");
        });

        it('menu should be hidden', function(done){
            expect(menu_hidden).toEqual(true);
            done();
        });

        it('menu should be show', function(done){
            expect($('body').hasClass('menu-hidden')).toEqual(false);
            done();
        });


        it('menu should be hidden', function(done){
            expect($('body').hasClass('menu-hidden')).toEqual(true);
            done();
        });

        
    });

    /* TODO: 13. 写一个叫做 "Initial Entries" 的测试用例 */

        /* TODO:
         * 写一个测试保证 loadFeed 函数被调用而且工作正常，即在 .feed 容器元素
         * 里面至少有一个 .entry 的元素。
         *
         * 记住 loadFeed() 函数是异步的所以这个而是应该使用 Jasmine 的 beforeEach
         * 和异步的 done() 函数。
         */
    describe('Initial Entries', function(){
        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('loadFeed is done', function(){
             expect($('.entry').length).not.toBe(0);
        })

        
    });
    /* TODO: 写一个叫做 "New Feed Selection" 的测试用例 */

        /* TODO:
         * 写一个测试保证当用 loadFeed 函数加载一个新源的时候内容会真的改变。
         * 记住，loadFeed() 函数是异步的。
         */

    describe('New Feed Selection', function(){
        var before, after;
        beforeEach(function(done){ 
            loadFeed(1,function(){
                before = $(".entry").eq(0).text();
                done();
            });
            loadFeed(0, function(){
                after = $(".entry").eq(0).text();
                done();
            })
        });

        it('loadFeed is change', function(){
            expect(before).not.toBe(after); 
        })
        
    });
}());
