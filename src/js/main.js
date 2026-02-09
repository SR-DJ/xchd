// 红包奖励范围和概率分布
const REWARDS = [
    { amount: 18.8, probability: 0.45 },   // 45%
    { amount: 28.8, probability: 0.25 },   // 25%
    { amount: 58.8, probability: 0.15 },   // 15%
    { amount: 68.8, probability: 0.10 },   // 10%
    { amount: 128.8, probability: 0.03 },  // 3%
    { amount: 188.8, probability: 0.02 }   // 2%
];

// 按概率抽取奖品
function getRandomReward() {
    const random = Math.random();
    let cumulativeProbability = 0;
    
    for (let i = 0; i < REWARDS.length; i++) {
        cumulativeProbability += REWARDS[i].probability;
        if (random < cumulativeProbability) {
            return REWARDS[i].amount;
        }
    }
    
    // 容错处理，返回最后一个奖品
    return REWARDS[REWARDS.length - 1].amount;
}

// 生成飘落金币
function createFallingParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
        const coin = document.createElement('div');
        coin.className = 'coin';
        coin.style.left = Math.random() * 100 + '%';
        coin.style.animationDelay = Math.random() * 5 + 's';
        coin.style.animationDuration = (8 + Math.random() * 4) + 's';
        coin.style.width = (20 + Math.random() * 30) + 'px';
        coin.style.height = coin.style.width;
        container.appendChild(coin);
    }
}

// 点击福袋抽奖
let isDrawing = false;
document.getElementById('luckyBag').addEventListener('click', function() {
    if (isDrawing) return;
    
    isDrawing = true;
    const bag = this;
    const hfbPopup = document.getElementById('hfbPopup');
    
    // 添加抖动效果
    bag.classList.add('shaking');
    
    setTimeout(() => {
        bag.classList.remove('shaking');
        
        
        // 显示样板2红包动画
        const s2Hongbao = document.getElementById('s2Hongbao');
        s2Hongbao.classList.add('show');
        s2Hongbao.style.display = 'block';

    }, 500);
});


// 样板2: 摇晃炸开式红包动画
function s2Open() {
    const env = document.getElementById('s2Envelope');
    if (env.classList.contains('shaking')) return;
    env.classList.add('shaking');
    const reward = getRandomReward();
    setTimeout(() => {
        env.classList.remove('shaking');
        env.classList.add('explode');
        const parent = document.getElementById('s2Hongbao');
        const colors = ['#FFD700', '#FF4500', '#FF6347', '#FF1493', '#00FF7F', '#FFE44D'];
        for (let i = 0; i < 30; i++) {
            const c = document.createElement('div');
            c.className = 's2-confetti';
            c.style.cssText = `
                left: 50%; top: 50%;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                width: ${6 + Math.random() * 8}px;
                height: ${6 + Math.random() * 8}px;
                border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
                --tx: ${(Math.random() - 0.5) * 400}px;
                --ty: ${(Math.random() - 0.5) * 400}px;
                position: absolute; z-index: 10;
            `;
            parent.appendChild(c);
        }
        setTimeout(() => {
            document.getElementById('s2Hongbao').style.display = 'none';
            document.getElementById('rewardAmount').innerHTML = `
                <span class="amount-val">￥${reward.toFixed(1)}</span>
                <span class="amount-unit">店存奖励</span>
            `;
            document.getElementById('resultModal').classList.add('show');
            isDrawing = false;
        }, 1200);
    }, 1500);
}

// 关闭弹窗
function closeModal() {
    document.getElementById('resultModal').classList.remove('show');
    
    // 重置红包动画状态
    const hongbao = document.getElementById('s2Hongbao');
    const envelope = document.getElementById('s2Envelope');
    
    // 移除所有动画CSS类
    hongbao.classList.remove('show');
    envelope.classList.remove('shaking', 'explode');
    
    // 清理所有彩屑元素
    const confettis = hongbao.querySelectorAll('.s2-confetti');
    confettis.forEach(c => c.remove());
    
    // 重置显示状态
    hongbao.style.display = 'none';
    
    // 重置标志，允许再次抽奖
    isDrawing = false;
}

// 打开微信小程序 (从 index1.html 迁移)
function openWeapp() {
    const weappUrl = "https://taix.cn/plugins/mobile/h5/mall/5489/?#/pages/index/index";
    window.open(weappUrl, '_blank');
}

// 点击弹窗外部关闭
document.getElementById('resultModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// 初始化
createFallingParticles();
