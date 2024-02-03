    var canvas = document.getElementById('gamezone');
    var context = canvas.getContext('2d');
    var scoreShow = document.getElementById('score');
    var messageShow = document.getElementById('message');

    var birdImg = new Image();
    var backgroundImg = new Image();
    var pipeTopImg = new Image();
    var pipeBottomImg = new Image();
    birdImg.src = "bird.png";
    backgroundImg.src = "nenchinh.png";
    pipeTopImg.src = "ongtren.png";
    pipeBottomImg.src = "ongduoi.png";

    var score = 1;
    var pipeGap = 140;
    var pipeDistance;
    var isGameOver = false;

    var bird = {
        x: backgroundImg.width / 5 + 300,
        y: backgroundImg.height / 2,
        width: 50, 
        height: 36, 
        velocity: 0,
        gravity: 0.3,
        jump: 6
    };

    var pipes = [];
    pipes[0] = {
        x: canvas.width,
        y: 0
    };

    function resetGame() {
        score = 0;
        scoreShow.innerHTML = "Score: " + score;
        messageShow.innerHTML = "";
        pipes = [];
        pipes[0] = {
            x: canvas.width,
            y: 0
        };
        bird.y = backgroundImg.height / 2;
        bird.velocity = 0;
        isGameOver = false;
        draw();
    }

    function draw() {
        context.drawImage(backgroundImg, 0, 0);
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    
        for (var i = 0; i < pipes.length; i++) {
            pipeDistance = pipeTopImg.height + pipeGap;
            context.drawImage(pipeTopImg, pipes[i].x, pipes[i].y);
            context.drawImage(pipeBottomImg, pipes[i].x, pipes[i].y + pipeDistance);
    
            pipes[i].x -= 5;
    
            if (pipes[i].x == canvas.width / 2) {
                pipes.push({
                    x: canvas.width,
                    y: Math.floor(Math.random() * pipeTopImg.height) - pipeTopImg.height
                });
            }
            if (pipes[i].x == 0) pipes.splice(0, 1);
    
            if (
                (bird.x < pipes[i].x + pipeTopImg.width &&
                bird.x + bird.width > pipes[i].x &&
                bird.y < pipes[i].y + pipeTopImg.height &&
                bird.y + bird.height > pipes[i].y) ||
                // Kiểm tra va chạm với trụ dưới
                (bird.x < pipes[i].x + pipeBottomImg.width &&
                bird.x + bird.width > pipes[i].x &&
                bird.y < pipes[i].y + pipeDistance + pipeBottomImg.height &&
                bird.y + bird.height > pipes[i].y + pipeDistance)
            ) {
                if (!isGameOver) {
                    messageShow.innerHTML = "Bạn đã thất bại. Hãy reset trang hoặc nhấn vào màn hình để thử lại.";
                    isGameOver = true;
                }
                return;
            }
    
            if (pipes[i].x == bird.x + bird.width / 2) { // Chỉ đếm điểm khi con chim đi qua ống
                score++;
                scoreShow.innerHTML = "Score: " + score;
            }
        }
    
        bird.velocity += bird.gravity;
        bird.y += bird.velocity;
    
        if (bird.y + bird.height >= canvas.height || bird.y <= 0) { // Kiểm tra va chạm với đỉnh hoặc đáy cửa sổ
            if (!isGameOver) {
                messageShow.innerHTML = "Bạn đã thất bại. Hãy reset trang hoặc nhấn vào màn hình để thử lại.";
                isGameOver = true;
            }
            return;
        }
    
        requestAnimationFrame(draw);
    }
    

    document.addEventListener("mousedown", function () {
        bird.velocity = -bird.jump;
        if (isGameOver) {
            resetGame();
        }
    });

    resetGame();
