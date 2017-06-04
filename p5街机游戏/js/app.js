// 这是我们的玩家要躲避的敌人 
var Enemy = function(x, y,sprite,speed) {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多
    this.x = x;
    this.y = y;

    // 敌人的图片或者雪碧图，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = sprite;
    this.speed = speed;
};

// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function(dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
     this.x += this.speed * dt;
     if(this.x >505){
        this.x = -100;
        this.y = random();
     }


};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    var checkCollsion = this.checkCollsion(player,allEnemies);
    if(checkCollsion){
        player.reset();
    }
};

Enemy.prototype.checkCollsion = function(p,e){

    for(var i = e.length - 1;i>= 0;i--){       
        if(Math.abs(p.getPosition().y - e[i].getPosition().y) > 60){
            continue;
        }else if(Math.abs(p.getPosition().x - e[i].getPosition().x) <= 50){
            return true;
        }else{
            continue;
        }
    }    

}

Enemy.prototype.getPosition = function() {
    return {
        x: this.x,
        y: this.y
    };
}

// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
var Player = function(x, y,sprite) {
    Enemy.call(this,x,y,sprite);
};

Player.prototype = Object.create(Enemy.prototype);

Player.prototype.constructor = Player;

Player.prototype.update = function(){
    if(this.y < 0){
        alert("恭喜你闯关成功");
        player.reset();
    }
}

Player.prototype.reset = function(){
    this.x = 200;
    this.y = 380;

}
Player.prototype.handleInput = function(dirction){
    switch(dirction){
        case 'up':
            this.y -=85;             
            break;        

        case 'down':
            this.y = this.y >= 380? this.y : this.y + 85;
            break;
            
        case 'left':
            this.x = this.x <= 0? this.x : this.x - 100;
            break;
            
        case 'right':
            this.x = this.x >= 400? this.x : this.x + 100;
            break;
        default :
            break;            
            
    }

}


// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面
var EnemyImg = 'images/enemy-bug.png';
var arr = [60,145,228];
var player = new Player(200, 380,'images/char-boy.png');


var enemy1 = new Enemy(-100, random(),EnemyImg,350);
var enemy2 = new Enemy(-100, random(),EnemyImg,150);
var enemy3 = new Enemy(-100, random(),EnemyImg,200);
var enemy4 = new Enemy(-100, random(),EnemyImg,80);
var enemy5 = new Enemy(-100, random(),EnemyImg,250);

var allEnemies = [enemy1, enemy2, enemy3,enemy4,enemy5];


// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Play.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

function random(){
    return arr[Math.floor(Math.random()*3)];
}


