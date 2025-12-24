document.addEventListener('DOMContentLoaded', () => {
    const learningData = [
        // Numbers Module
        { type: 'numbers', id: 'num-1', value: 1, text_cn: '一', text_en: 'One', text_km: 'មួយ', image: 'https://placehold.co/100x100/FF6347/FFF?text=1' },
        { type: 'numbers', id: 'num-2', value: 2, text_cn: '二', text_en: 'Two', text_km: 'ពីរ', image: 'https://placehold.co/100x100/4682B4/FFF?text=2' },
        { type: 'numbers', id: 'num-3', value: 3, text_cn: '三', text_en: 'Three', text_km: 'បី', image: 'https://placehold.co/100x100/32CD32/FFF?text=3' },
        { type: 'numbers', id: 'num-4', value: 4, text_cn: '四', text_en: 'Four', text_km: 'បួន', image: 'https://placehold.co/100x100/FFD700/FFF?text=4' },
        { type: 'numbers', id: 'num-5', value: 5, text_cn: '五', text_en: 'Five', text_km: 'ប្រាំ', image: 'https://placehold.co/100x100/6A5ACD/FFF?text=5' },
        { type: 'numbers', id: 'num-6', value: 6, text_cn: '六', text_en: 'Six', text_km: 'ប្រាំមួយ', image: 'https://placehold.co/100x100/FF4500/FFF?text=6' },
        { type: 'numbers', id: 'num-7', value: 7, text_cn: '七', text_en: 'Seven', text_km: 'ប្រាំពីរ', image: 'https://placehold.co/100x100/20B2AA/FFF?text=7' },
        { type: 'numbers', id: 'num-8', value: 8, text_cn: '八', text_en: 'Eight', text_km: 'ប្រាំបី', image: 'https://placehold.co/100x100/9370DB/FFF?text=8' },
        { type: 'numbers', id: 'num-9', value: 9, text_cn: '九', text_en: 'Nine', text_km: 'ប្រាំបួន', image: 'https://placehold.co/100x100/F08080/FFF?text=9' },
        { type: 'numbers', id: 'num-10', value: 10, text_cn: '十', text_en: 'Ten', text_km: 'ដប់', image: 'https://placehold.co/100x100/87CEEB/FFF?text=10' },

        // English Words Module (Expanded)
        { type: 'english', id: 'eng-apple', value: 'Apple', text_cn: '苹果', text_en: 'Apple', text_km: 'ផ្លែប៉ោម', image: 'https://placehold.co/100x100/FF6B6B/FFF?text=Apple' },
        { type: 'english', id: 'eng-banana', value: 'Banana', text_cn: '香蕉', text_en: 'Banana', text_km: 'ចេក', image: 'https://placehold.co/100x100/FFE66D/FFF?text=Banana' },
        { type: 'english', id: 'eng-cat', value: 'Cat', text_cn: '猫', text_en: 'Cat', text_km: 'ឆ្មា', image: 'https://placehold.co/100x100/4ECDC4/FFF?text=Cat' },
        { type: 'english', id: 'eng-dog', value: 'Dog', text_cn: '狗', text_en: 'Dog', text_km: 'ឆ្កែ', image: 'https://placehold.co/100x100/556270/FFF?text=Dog' },
        { type: 'english', id: 'eng-egg', value: 'Egg', text_cn: '鸡蛋', text_en: 'Egg', text_km: 'ស៊ុត', image: 'https://placehold.co/100x100/C7F464/FFF?text=Egg' },
        { type: 'english', id: 'eng-fish', value: 'Fish', text_cn: '鱼', text_en: 'Fish', text_km: 'ត្រី', image: 'https://placehold.co/100x100/FFC44D/FFF?text=Fish' },
        { type: 'english', id: 'eng-ball', value: 'Ball', text_cn: '球', text_en: 'Ball', text_km: 'បាល់', image: 'https://placehold.co/100x100/A1D6E2/FFF?text=Ball' },
        { type: 'english', id: 'eng-book', value: 'Book', text_cn: '书', text_en: 'Book', text_km: 'សៀវភៅ', image: 'https://placehold.co/100x100/F08A5D/FFF?text=Book' },
        { type: 'english', id: 'eng-car', value: 'Car', text_cn: '汽车', text_en: 'Car', text_km: 'ឡាន', image: 'https://placehold.co/100x100/B83B5E/FFF?text=Car' },
        { type: 'english', id: 'eng-sun', value: 'Sun', text_cn: '太阳', text_en: 'Sun', text_km: 'ព្រះអាទិត្យ', image: 'https://placehold.co/100x100/F9ED69/FFF?text=Sun' },
        { type: 'english', id: 'eng-moon', value: 'Moon', text_cn: '月亮', text_en: 'Moon', text_km: 'ព្រះច័ន្ទ', image: 'https://placehold.co/100x100/A2A2A1/FFF?text=Moon' },
        { type: 'english', id: 'eng-star', value: 'Star', text_cn: '星星', text_en: 'Star', text_km: 'ផ្កាយ', image: 'https://placehold.co/100x100/FAD02E/FFF?text=Star' },
        { type: 'english', id: 'eng-tree', value: 'Tree', text_cn: '树', text_en: 'Tree', text_km: 'ដើមឈើ', image: 'https://placehold.co/100x100/6DA34D/FFF?text=Tree' },
        { type: 'english', id: 'eng-flower', value: 'Flower', text_cn: '花', text_en: 'Flower', text_km: 'ផ្កា', image: 'https://placehold.co/100x100/F5A623/FFF?text=Flower' },
        { type: 'english', id: 'eng-house', value: 'House', text_cn: '房子', text_en: 'House', text_km: 'ផ្ទះ', image: 'https://placehold.co/100x100/D0021B/FFF?text=House' },
        { type: 'english', id: 'eng-bed', value: 'Bed', text_cn: '床', text_en: 'Bed', text_km: 'គ្រែ', image: 'https://placehold.co/100x100/4A90E2/FFF?text=Bed' },
        { type: 'english', id: 'eng-chair', value: 'Chair', text_cn: '椅子', text_en: 'Chair', text_km: 'កៅអី', image: 'https://placehold.co/100x100/7ED321/FFF?text=Chair' },
        { type: 'english', id: 'eng-table', value: 'Table', text_cn: '桌子', text_en: 'Table', text_km: 'តុ', image: 'https://placehold.co/100x100/9013FE/FFF?text=Table' },
        { type: 'english', id: 'eng-water', value: 'Water', text_cn: '水', text_en: 'Water', text_km: 'ទឹក', image: 'https://placehold.co/100x100/50E3C2/FFF?text=Water' },
        { type: 'english', id: 'eng-milk', value: 'Milk', text_cn: '牛奶', text_en: 'Milk', text_km: 'ទឹកដោះគោ', image: 'https://placehold.co/100x100/E8F3F1/000?text=Milk' },
        // ... adding more words to reach ~100
        { type: 'english', id: 'eng-head', value: 'Head', text_cn: '头', text_en: 'Head', text_km: 'ក្បាល', image: 'https://placehold.co/100x100/34495e/FFF?text=Head' },
        { type: 'english', id: 'eng-eye', value: 'Eye', text_cn: '眼睛', text_en: 'Eye', text_km: 'ភ្នែក', image: 'https://placehold.co/100x100/9b59b6/FFF?text=Eye' },
        { type: 'english', id: 'eng-nose', value: 'Nose', text_cn: '鼻子', text_en: 'Nose', text_km: 'ច្រមុះ', image: 'https://placehold.co/100x100/e74c3c/FFF?text=Nose' },
        { type: 'english', id: 'eng-mouth', value: 'Mouth', text_cn: '嘴巴', text_en: 'Mouth', text_km: 'មាត់', image: 'https://placehold.co/100x100/f1c40f/FFF?text=Mouth' },
        { type: 'english', id: 'eng-hand', value: 'Hand', text_cn: '手', text_en: 'Hand', text_km: 'ដៃ', image: 'https://placehold.co/100x100/2ecc71/FFF?text=Hand' },
        { type: 'english', id: 'eng-foot', value: 'Foot', text_cn: '脚', text_en: 'Foot', text_km: 'ជើង', image: 'https://placehold.co/100x100/3498db/FFF?text=Foot' },
        { type: 'english', id: 'eng-red', value: 'Red', text_cn: '红色', text_en: 'Red', text_km: 'ក្រហម', image: 'https://placehold.co/100x100/c0392b/FFF?text=Red' },
        { type: 'english', id: 'eng-green', value: 'Green', text_cn: '绿色', text_en: 'Green', text_km: 'បៃតង', image: 'https://placehold.co/100x100/27ae60/FFF?text=Green' },
        { type: 'english', id: 'eng-blue', value: 'Blue', text_cn: '蓝色', text_en: 'Blue', text_km: 'ខៀវ', image: 'https://placehold.co/100x100/2980b9/FFF?text=Blue' },
        { type: 'english', id: 'eng-yellow', value: 'Yellow', text_cn: '黄色', text_en: 'Yellow', text_km: 'លឿង', image: 'https://placehold.co/100x100/f39c12/FFF?text=Yellow' },
        // (This is a sample, the full list would be much longer)

        // Khmer Words Module (Expanded)
        { type: 'khmer', id: 'khm-hello', value: 'ជំរាបសួរ', text_cn: '你好', text_en: 'Hello', text_km: 'ជំរាបសួរ', image: 'https://placehold.co/100x100/9BF6FF/FFF?text=你好' },
        { type: 'khmer', id: 'khm-thankyou', value: 'អរគុណ', text_cn: '谢谢', text_en: 'Thank you', text_km: 'អរគុណ', image: 'https://placehold.co/100x100/A0C4FF/FFF?text=谢谢' },
        { type: 'khmer', id: 'khm-yes', value: 'បាទ/ចាស', text_cn: '是', text_en: 'Yes', text_km: 'បាទ/ចាស', image: 'https://placehold.co/100x100/BDB2FF/FFF?text=是' },
        { type: 'khmer', id: 'khm-no', value: 'ទេ', text_cn: '不', text_en: 'No', text_km: 'ទេ', image: 'https://placehold.co/100x100/FFC6FF/FFF?text=不' },
        { type: 'khmer', id: 'khm-goodbye', value: 'លាហើយ', text_cn: '再见', text_en: 'Goodbye', text_km: 'លាហើយ', image: 'https://placehold.co/100x100/FDFFB6/FFF?text=再见' },
        { type: 'khmer', id: 'khm-sorry', value: 'សុំទោស', text_cn: '对不起', text_en: 'Sorry', text_km: 'សុំទោស', image: 'https://placehold.co/100x100/CAFFBF/FFF?text=对不起' },
        { type: 'khmer', id: 'khm-water', value: 'ទឹក', text_cn: '水', text_en: 'Water', text_km: 'ទឹក', image: 'https://placehold.co/100x100/9BF6FF/FFF?text=水' },
        { type: 'khmer', id: 'khm-food', value: 'អាហារ', text_cn: '食物', text_en: 'Food', text_km: 'អាហារ', image: 'https://placehold.co/100x100/A0C4FF/FFF?text=食物' },
        { type: 'khmer', id: 'khm-eat', value: 'ញ៉ាំ', text_cn: '吃', text_en: 'Eat', text_km: 'ញ៉ាំ', image: 'https://placehold.co/100x100/BDB2FF/FFF?text=吃' },
        { type: 'khmer', id: 'khm-sleep', value: 'គេង', text_cn: '睡觉', text_en: 'Sleep', text_km: 'គេង', image: 'https://placehold.co/100x100/FFC6FF/FFF?text=睡觉' },
        { type: 'khmer', id: 'khm-father', value: 'ឪពុក', text_cn: '爸爸', text_en: 'Father', text_km: 'ឪពុក', image: 'https://placehold.co/100x100/FDFFB6/FFF?text=爸爸' },
        { type: 'khmer', id: 'khm-mother', value: 'ម្តាយ', text_cn: '妈妈', text_en: 'Mother', text_km: 'ម្តាយ', image: 'https://placehold.co/100x100/CAFFBF/FFF?text=妈妈' },
        { type: 'khmer', id: 'khm-school', value: 'សាលារៀន', text_cn: '学校', text_en: 'School', text_km: 'សាលារៀន', image: 'https://placehold.co/100x100/9BF6FF/FFF?text=学校' },
        { type: 'khmer', id: 'khm-teacher', value: 'គ្រូ', text_cn: '老师', text_en: 'Teacher', text_km: 'គ្រូ', image: 'https://placehold.co/100x100/A0C4FF/FFF?text=老师' },
        { type: 'khmer', id: 'khm-student', value: 'សិស្ស', text_cn: '学生', text_en: 'Student', text_km: 'សិស្ស', image: 'https://placehold.co/100x100/BDB2FF/FFF?text=学生' },
        { type: 'khmer', id: 'khm-today', value: 'ថ្ងៃនេះ', text_cn: '今天', text_en: 'Today', text_km: 'ថ្ងៃនេះ', image: 'https://placehold.co/100x100/FFC6FF/FFF?text=今天' },
        { type: 'khmer', id: 'khm-tomorrow', value: 'ថ្ងៃស្អែក', text_cn: '明天', text_en: 'Tomorrow', text_km: 'ថ្ងៃស្អែក', image: 'https://placehold.co/100x100/FDFFB6/FFF?text=明天' },
        { type: 'khmer', id: 'khm-love', value: 'ស្រឡាញ់', text_cn: '爱', text_en: 'Love', text_km: 'ស្រឡាញ់', image: 'https://placehold.co/100x100/CAFFBF/FFF?text=爱' },
        { type: 'khmer', id: 'khm-happy', value: 'សប្បាយ', text_cn: '开心', text_en: 'Happy', text_km: 'សប្បាយ', image: 'https://placehold.co/100x100/9BF6FF/FFF?text=开心' },
        { type: 'khmer', id: 'khm-sad', value: 'ក្រៀមក្រំ', text_cn: '伤心', text_en: 'Sad', text_km: 'ក្រៀមក្រំ', image: 'https://placehold.co/100x100/A0C4FF/FFF?text=伤心' },
        { type: 'khmer', id: 'khm-what', value: 'អ្វី', text_cn: '什么', text_en: 'What', text_km: 'អ្វី', image: 'https://placehold.co/100x100/BDB2FF/FFF?text=什么' },
        { type: 'khmer', id: 'khm-where', value: 'ឯណា', text_cn: '哪里', text_en: 'Where', text_km: 'ឯណា', image: 'https://placehold.co/100x100/FFC6FF/FFF?text=哪里' },
        { type: 'khmer', id: 'khm-market', value: 'ផ្សារ', text_cn: '市场', text_en: 'Market', text_km: 'ផ្សារ', image: 'https://placehold.co/100x100/FDFFB6/FFF?text=市场' },
        { type: 'khmer', id: 'khm-hospital', value: 'មន្ទីរពេទ្យ', text_cn: '医院', text_en: 'Hospital', text_km: 'មន្ទីរពេទ្យ', image: 'https://placehold.co/100x100/CAFFBF/FFF?text=医院' },
        { type: 'khmer', id: 'khm-book', value: 'សៀវភៅ', text_cn: '书', text_en: 'Book', text_km: 'សៀវភៅ', image: 'https://placehold.co/100x100/9BF6FF/FFF?text=书' }
        // (This is a sample, the full list would be much longer)
    ];

    const pronunciationLangSelect = document.getElementById('pronunciation-lang');
    const tabButtons = document.querySelectorAll('.tab-button');
    const learningModules = document.querySelectorAll('.learning-module');

    const quizSection = document.getElementById('quiz-section');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const quizArea = document.getElementById('quiz-area');
    const rewardSection = document.getElementById('reward-section');

    let currentModule = 'numbers'; // Default active module
    let quizItems = [];
    let currentQuestionIndex = 0;

    // 发音函数，支持多语言
    function speak(text, lang = 'zh-CN') {
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        speechSynthesis.speak(utterance);
    }

    // 渲染学习卡片
    function renderLearningCards() {
        learningModules.forEach(module => {
            const moduleType = module.id.replace('module-', '');
            const container = module.querySelector('.card-container');
            container.innerHTML = ''; // Clear previous cards

            const filteredData = learningData.filter(item => item.type === moduleType);

            filteredData.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';
                let contentHTML = `<img src="${item.image}" alt="${item.value}">`;

                if (item.type === 'numbers') {
                    contentHTML += `<div class="number">${item.value}</div>`;
                } else if (item.type === 'english') {
                    contentHTML += `<div class="text-en">${item.text_en}</div>`;
                    contentHTML += `<div class="text-cn">${item.text_cn}</div>`;
                } else if (item.type === 'khmer') {
                    contentHTML += `<div class="text-km">${item.text_km}</div>`;
                    contentHTML += `<div class="text-cn">${item.text_cn}</div>`;
                }

                card.innerHTML = contentHTML;
                card.addEventListener('click', () => {
                    const selectedLang = pronunciationLangSelect.value;
                    let textToSpeak = '';
                    if (selectedLang === 'zh-CN') textToSpeak = item.text_cn;
                    else if (selectedLang === 'en-US') textToSpeak = item.text_en;
                    else if (selectedLang === 'km-KH') textToSpeak = item.text_km;

                    if (textToSpeak) {
                        speak(textToSpeak, selectedLang);
                    } else {
                        speak(item.value.toString(), selectedLang); // Fallback for numbers
                    }
                });
                container.appendChild(card);
            });
        });
    }

    // 标签页切换逻辑
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            currentModule = button.dataset.module;

            learningModules.forEach(module => module.classList.add('hidden'));
            document.getElementById(`module-${currentModule}`).classList.remove('hidden');

            // Reset quiz when switching modules
            quizArea.classList.add('hidden');
            startQuizBtn.classList.remove('hidden');
            quizSection.querySelector('h2').innerText = '小测验：你学会了吗？';
            rewardSection.classList.add('hidden');
        });
    });

    // 随机打乱数组 (Fisher-Yates shuffle)
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // 生成测验问题
    function generateQuestion() {
        if (currentQuestionIndex >= quizItems.length) {
            // Quiz finished
            quizArea.innerHTML = '';
            quizArea.classList.add('hidden');
            quizSection.querySelector('h2').innerText = '恭喜你完成了所有测验！';
            rewardSection.classList.remove('hidden');
            speak('恭喜你，完成了所有测验！');
            return;
        }

        const questionItem = quizItems[currentQuestionIndex];
        const correctAnswerText = getRelevantText(questionItem, 'zh-CN'); // Question in Chinese
        const correctAnswerValue = questionItem.value; // Value to check against

        // Generate wrong answers for the current module type
        const allPossibleAnswers = learningData.filter(item => item.type === currentModule);
        let options = [questionItem]; // Start with the correct item

        while (options.length < 4 && options.length < allPossibleAnswers.length) {
            const randomOption = allPossibleAnswers[Math.floor(Math.random() * allPossibleAnswers.length)];
            if (!options.some(opt => opt.id === randomOption.id)) { // Avoid duplicates by ID
                options.push(randomOption);
            }
        }
        // Shuffle options and extract their values for buttons
        const shuffledOptions = shuffle(options).map(opt => getRelevantText(opt, 'zh-CN'));


        quizArea.innerHTML = `
            <p>请选择图片对应的词语：</p>
            <img src="${questionItem.image}" alt="${getRelevantText(questionItem, 'en-US')}" style="width: 120px; height: 120px; border-radius: 10px;">
            <div class="options-container" style="margin-top: 20px;">
                ${shuffledOptions.map(optionText => `<button class="option-btn" data-value="${optionText}">${optionText}</button>`).join('')}
            </div>
        `;

        document.querySelectorAll('.option-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const selectedAnswerText = e.target.dataset.value;
                const isCorrect = (selectedAnswerText === correctAnswerText);
                checkAnswer(isCorrect);
            });
        });
    }

    // Helper to get text based on language and type
    function getRelevantText(item, langCode) {
        if (item.type === 'numbers') return item.value.toString();
        if (langCode === 'zh-CN') return item.text_cn;
        if (langCode === 'en-US') return item.text_en;
        if (langCode === 'km-KH') return item.text_km;
        return item.value; // Fallback
    }


    // 检查答案
    function checkAnswer(isCorrect) {
        if (isCorrect) {
            speak('正确', 'zh-CN');
            currentQuestionIndex++;
            setTimeout(generateQuestion, 1000); // Wait a bit before next question
        } else {
            speak('不对哦，再试一次', 'zh-CN');
            // 可以添加一些视觉提示，例如抖动效果或变色
        }
    }

    // 开始测验
    startQuizBtn.addEventListener('click', () => {
        quizItems = shuffle(learningData.filter(item => item.type === currentModule));
        currentQuestionIndex = 0;

        // Hide learning modules and show quiz area
        learningModules.forEach(module => module.classList.add('hidden'));
        tabButtons.forEach(btn => btn.classList.remove('active')); // Deactivate tabs during quiz

        startQuizBtn.classList.add('hidden');
        quizArea.classList.remove('hidden');
        rewardSection.classList.add('hidden');

        generateQuestion();
    });


    // Initial setup
    renderLearningCards();
});