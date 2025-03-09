//此时钟由deepseek编写
// 生成刻度线
        function createMarks() {
            const marks = document.querySelector('.marks');
            for(let i = 0; i < 60; i++) {
                const mark = document.createElement('div');
                mark.className = 'mark';
                mark.style.transform = `rotate(${i * 6}deg)`;
                marks.appendChild(mark);
            }
        }

        // 获取东八区时间
        function getBeijingTime() {
            const now = new Date();
            // 转换为东八区时间（UTC+8）
            const utc = now.getTime() + now.getTimezoneOffset() * 60000;
            return new Date(utc + 3600000 * 8);
        }

        // 更新时钟
        function updateClock() {
            const now = getBeijingTime();
            
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            
            // 计算角度
            const hourDeg = (hours % 12) * 30 + minutes * 0.5;
            const minuteDeg = minutes * 6 + seconds * 0.1;
            const secondDeg = seconds * 6;

            // 应用旋转角度
            document.querySelector('.hour-hand').style.transform = 
                `rotate(${hourDeg}deg)`;
            document.querySelector('.minute-hand').style.transform = 
                `rotate(${minuteDeg}deg)`;
            document.querySelector('.second-hand').style.transform = 
                `rotate(${secondDeg}deg)`;
        }

        // 初始化
        createMarks();
        setInterval(updateClock, 1000);
        updateClock(); // 立即执行一次
