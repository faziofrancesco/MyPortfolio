export const portfolioData = [
    {
        title: "Big data Project",
        description: {
            en: "The project leverages Big Data techniques to develop a stroke prediction model using a dataset of 5,110 patients. Through data cleaning and transformation of categorical variables, the data was standardized and processed using MapReduce and Spark frameworks. The pipeline efficiently handled large volumes of data, employing oversampling and feature standardization. Machine learning models such as Random Forest, Decision Tree, and Naïve Bayes were implemented, with Random Forest delivering the best performance. This project highlights the role of Big Data in healthcare by enabling accurate and scalable predictive models for stroke prevention.",
            it: "Il progetto utilizza tecniche di Big Data per sviluppare un modello predittivo dell'ictus, basato su un dataset di 5110 pazienti. Attraverso processi di data cleaning e trasformazione delle variabili categoriali, i dati sono stati standardizzati e preparati per essere elaborati con MapReduce e Spark. La pipeline ha gestito grandi volumi di dati con tecniche di oversampling e standardizzazione. Sono stati implementati modelli di machine learning come Random Forest, Decision Tree e Naïve Bayes, con il Random Forest che ha ottenuto i migliori risultati. Questo progetto dimostra l'importanza dei Big Data nella prevenzione medica attraverso modelli predittivi accurati e scalabili.",
            jp: "このプロジェクトは、ビッグデータ技術を活用して、5,110人の患者データを用いた脳卒中予測モデルを開発しています。データのクレンジングとカテゴリ変数の変換を行った後、データは標準化され、MapReduceやSparkフレームワークを使用して処理されました。このパイプラインは、大規模データを効率的に処理し、オーバーサンプリングや特徴量の標準化を行いました。ランダムフォレスト、決定木、ナイーブベイズなどの機械学習モデルが適用され、ランダムフォレストが最も高い精度を示しました。このプロジェクトは、ビッグデータが医療における予測モデルの正確性とスケーラビリティを高め、脳卒中予防に貢献することを示しています。"
        },
        tags: ["Machine Learning", "Big Data", "Map Reduce","ApacheSpark"],
        image: "bigdata.png",
        link: "https://github.com/faziofrancesco/BigData/tree/master",
        documentation: "https://github.com/faziofrancesco/BigData/blob/master/StrokePrediction.pdf",
    },
    {
        title: "Optimization for Machine Learning Project",
        description: {
            en: "The project focuses on implementing a Support Vector Machine (SVM) algorithm for Multiple Instance Learning (MIL). Using the \"dataset14MIL.mat\" dataset, the goal is to perform a linear separation of the \"bags\" based on the standard MIL assumption. The Block Coordinate Descent (BCD) method is applied to solve the problem, with the parameter \n" +
                "𝐶\n" +
                "=\n" +
                "1\n" +
                "C=1. At each iteration, the separating hyperplane is displayed, and the model's accuracy on the training set is computed.",
            it: "Il progetto si concentra sull'implementazione di un algoritmo di Support Vector Machine (SVM) per Multiple Instance Learning (MIL). Utilizzando il dataset \"dataset14MIL.mat\", l'obiettivo è effettuare una separazione lineare dei \"bags\" basata sull'assunzione MIL standard. Viene applicato il metodo Block Coordinate Descent (BCD) per risolvere il problema, con il parametro \n" +
                "𝐶\n" +
                "=\n" +
                "1\n" +
                "C=1. Durante ogni iterazione, viene visualizzato l'iperpiano separatore e viene calcolata la correttezza del modello sul set di addestramento.",
            jp: "このプロジェクトは、Multiple Instance Learning (MIL) のためのサポートベクターマシン (SVM) アルゴリズムの実装に焦点を当てています。 \"dataset14MIL.mat\" データセットを使用して、標準的なMILの仮定に基づいて「バッグ」の線形分離を行います。 Block Coordinate Descent (BCD) 法を使用して問題を解決し、パラメーター \n" +
                "𝐶\n" +
                "=\n" +
                "1\n" +
                "C=1 を設定します。 各イテレーションでは、分離ハイパープレーンが表示され、トレーニングセットに対するモデルの正確性が計算されます。"
        },
        tags: ["SVM", "Machine Learning", "Octave"],
        image: "svm.png",
        link: "https://github.com/faziofrancesco/OPTIMIZATIONFORMACHINELEARNING",
        documentation: "https://github.com/faziofrancesco/OPTIMIZATIONFORMACHINELEARNING/blob/master/project14.pdf",
    },
    {
        title: "IA Project ",
        description: {
            en: "I developed an artificial intelligence specialized in poker using ASP programs. To test its capabilities, I used a website and sent commands through Selenium and Java. The AI analyzed the player's budget and the moves of other players to decide whether to play conservatively, normally, or aggressively. I ran several tests, and the results were highly positive, showing the AI's ability to adapt to different game situations effectively.",
            it: "Ho sviluppato un'intelligenza artificiale specializzata nel gioco del poker utilizzando programmi ASP. Per testare le sue capacità, ho utilizzato un sito web e inviato comandi tramite Selenium e Java. L'intelligenza artificiale, analizzando il budget del giocatore e le mosse degli altri partecipanti, decideva se adottare una strategia conservativa, normale o aggressiva. Ho eseguito diversi test, ottenendo risultati molto positivi, che dimostrano l'efficacia dell'IA nell'adattarsi alle varie situazioni di gioco.",
            jp: "私は、ASPプログラムを使用してポーカーに特化した人工知能を開発しました。その性能をテストするために、SeleniumとJavaを介してコマンドを送信し、ウェブサイトを使用しました。AIはプレイヤーの予算や他のプレイヤーの動きを分析し、保守的、通常、または攻撃的な戦略を選択しました。複数のテストを行い、その結果は非常に良好で、AIがさまざまなゲーム状況に適応できる能力を示しました。"
        },
        tags: ["IA", "ASP", "Selenium","Java"],
        image: "robot.jpg",
        link: "https://github.com/faziofrancesco/dlvPoker",
        documentation: "https://github.com/faziofrancesco/dlvPoker",
    },
    {
        title: "Deep Learning Project",
        description: {
            en: "In this project, I developed a Recurrent Neural Network (RNN) to predict values and detect anomalies in test data using Deep Learning techniques. In the first task, the network was trained to predict future values of a time series using a GRU model, achieving excellent accuracy. In the second task, I applied an autoencoder to detect anomalies, aiming to recognize signs of Parkinson's disease in the analyzed patients. The model showed strong learning capabilities and time series analysis performance.",
            it: "Nel progetto, ho sviluppato una rete neurale ricorrente (RNN) per prevedere valori e identificare anomalie nei dati del test, utilizzando tecniche di Deep Learning. Nel primo compito, la rete è stata addestrata a prevedere i valori futuri di una serie temporale utilizzando un modello GRU, con ottimi risultati nella precisione. Nel secondo compito, ho applicato un autoencoder per identificare anomalie nei dati, con l'obiettivo di rilevare segni di Parkinson nei pazienti analizzati. Il modello ha dimostrato ottime capacità di apprendimento e analisi delle serie temporali.",
            jp: "このプロジェクトでは、ディープラーニング技術を使用して、テストデータ内の値を予測し、異常を検出するためのリカレントニューラルネットワーク（RNN）を開発しました。最初のタスクでは、GRUモデルを使用して時系列データの未来の値を予測するようにネットワークをトレーニングし、優れた精度を達成しました。2つ目のタスクでは、異常を検出するためにオートエンコーダーを適用し、分析対象の患者におけるパーキンソン病の兆候を特定することを目指しました。このモデルは、時系列データの学習と解析に優れた能力を示しました。"
        },
        tags: ["RNN", "GRU", "Autoencoder","Python","Deep Learning"],
        image: "deep.png",
        link: "https://github.com/yourusername/time-series-forecasting",
        documentation: "https://yourwebsite.com/time-series-forecasting-doc",
    },
    {
        title: "Data warehouse Project",
        description: {
            en: "The analysis utilized the Global Terrorism Database (1970-2017) and employed advanced technologies such as Pentaho and Tableau for data warehousing. The study compared annual deaths and injuries, terrorist participation rates, attack types, and global trends. Specifically, the analysis focused on two key aspects: U.S. casualties and regional attack patterns. These comparisons allowed for the identification of significant patterns and the forecasting of future terrorist activities. The analytical and data visualization techniques provided a comprehensive understanding of global terrorism dynamics.",
            it: "L'analisi ha utilizzato il Global Terrorism Database (1970-2017) e ha fatto ricorso a tecnologie avanzate come Pentaho e Tableau per il data warehousing. Sono stati confrontati annualmente i decessi e le ferite, i tassi di partecipazione dei terroristi, i tipi di attacchi e le tendenze globali. In particolare, l'analisi si è focalizzata su due aspetti chiave: le vittime negli Stati Uniti e i modelli di attacco a livello regionale. Questi confronti hanno permesso di identificare schemi significativi e di fare previsioni sulle future attività terroristiche. Le tecniche analitiche e di visualizzazione dei dati hanno fornito una comprensione approfondita delle dinamiche globali del terrorismo.",
            jp: "この分析では、Global Terrorism Database（1970-2017）を使用し、データウェアハウジングにはPentahoとTableauなどの先進技術を利用しました。年ごとの死亡者数や負傷者数、テロリストの参加率、攻撃の種類、そしてグローバルトレンドを比較しました。特に、米国の犠牲者数と地域別の攻撃パターンに焦点を当てました。これらの比較により、重要なパターンを特定し、今後のテロ活動を予測することができました。分析手法とデータ可視化技術により、テロリズムのグローバルな動態についての包括的な理解が得られました。"
        },
        tags: ["Data Visualization", "Business Intelligence", "ETL","Pentaho","Tableau"],
        image: "terrorism.jpg",
        link: "https://github.com/faziofrancesco/DwProject",
        documentation: "https://github.com/faziofrancesco/DwProject",
    }
];
export const skillsData = {
    it: [
        {
            category: 'Competenze Tecniche (Hard Skills)',
            skills: [
                { name: 'Python' },
                { name: 'Java' },
                { name: 'C++' },
                { name: 'C#' },
                { name: 'R' },
                { name: 'TensorFlow' },
                { name: 'Keras' },
                { name: 'scikit-learn' },
                { name: 'SQL' },
                { name: 'Hadoop' },
                { name: 'Azure' },
                { name: 'Tableau' },
                { name: 'Matplotlib' },
            ],
        },
        {
            category: 'Competenze Trasversali (Soft Skills)',
            skills: [
                { name: 'Problem Solving' },
                { name: 'Data Analysis' },
                { name: 'Comunicazione Tecnica' },
                { name: 'Lavorare in Team' },
                { name: 'Adattabilità' },
                { name: 'Autonomia' },
                { name: 'Creatività' },
                { name: 'Gestione del Tempo' },
            ],
        },
        {
            category: 'Competenze di Dominio',
            skills: [
                { name: 'Analisi delle Reti Sociali' },
                { name: 'Intelligenza Artificiale' },
                {name: 'Analista dei Dati'}
            ],
        },
        {
            category: 'Competenze Linguistiche',
            skills: [
                { name: 'Italiano', level: 'Madrelingua' },
                { name: 'Inglese', level: 'Fluente (B1/B2)' },
                { name: 'Giapponese', level: 'Intermedio (N4 JLPT)' },
            ],
        },
        {
            category: 'Sport',
            skills: [
                { name: 'Maratona' },
                { name: 'Arrampicata' },
            ],
        },
    ],
    en: [
        {
            category: 'Technical Skills (Hard Skills)',
            skills: [
                { name: 'Python' },
                { name: 'Java' },
                { name: 'C++' },
                { name: 'C#' },
                { name: 'R' },
                { name: 'TensorFlow' },
                { name: 'Keras' },
                { name: 'scikit-learn' },
                { name: 'SQL' },
                { name: 'Hadoop' },
                { name: 'Azure' },
                { name: 'Tableau' },
                { name: 'Matplotlib' },
            ],
        },
        {
            category: 'Soft Skills',
            skills: [
                { name: 'Problem Solving' },
                { name: 'Data Analysis' },
                { name: 'Technical Communication' },
                { name: 'Teamwork' },
                { name: 'Adaptability' },
                { name: 'Autonomy' },
                { name: 'Creativity' },
                { name: 'Time Management' },
            ],
        },
        {
            category: 'Domain Expertise',
            skills: [
                { name: 'Social Network Analysis' },
                { name: 'Artificial Intelligence' },
                {name: 'Data Analyst'}
            ],
        },
        {
            category: 'Language Skills',
            skills: [
                { name: 'Italian', level: 'Native' },
                { name: 'English', level: 'Fluent (B1/B2)' },
                { name: 'Japanese', level: 'Intermediate (N4 JLPT)' },
            ],
        },
        {
            category: 'Sports',
            skills: [
                { name: 'Marathon' },
                { name: 'Climbing' },
            ],
        },
    ],
    jp: [
        {
            category: '技術的スキル (ハードスキル)',
            skills: [
                { name: 'Python' },
                { name: 'Java' },
                { name: 'C++' },
                { name: 'C#' },
                { name: 'R' },
                { name: 'TensorFlow' },
                { name: 'Keras' },
                { name: 'scikit-learn' },
                { name: 'SQL' },
                { name: 'Hadoop' },
                { name: 'Azure' },
                { name: 'Tableau' },
                { name: 'Matplotlib' },
            ],
        },
        {
            category: 'ソフトスキル',
            skills: [
                { name: '問題解決' },
                { name: 'データ分析' },
                { name: '技術的なコミュニケーション' },
                { name: 'チームワーク' },
                { name: '適応力' },
                { name: '自主性' },
                { name: '創造力' },
                { name: '時間管理' },
            ],
        },
        {
            category: 'ドメインの専門知識',
            skills: [
                { name: 'ソーシャルネットワーク分析' },
                { name: '人工知能' },
                {name: 'データアナリスト'}
            ],
        },
        {
            category: '言語スキル',
            skills: [
                { name: 'イタリア語', level: 'ネイティブ' },
                { name: '英語', level: '流暢 (B1/B2)' },
                { name: '日本語', level: '中級 (N4 JLPT)' },
            ],
        },
        {
            category: 'スポーツ',
            skills: [
                { name: 'マラソン' },
                { name: 'クライミング' },
            ],
        },
    ],
};
export const translations = {
    en: {
        aboutTitle: 'About',
        aboutText: "I am Francesco Fazio, a data scientist deeply passionate about data and its potential to reveal valuable insights. I hold a Master’s degree in Computer Science and Artificial Intelligence from the University of Calabria, where I developed a strong understanding of data science and machine learning principles.\n" +
            "\n" +
            "Through my professional experience, I have had the opportunity to explore various aspects of data analysis, taking on stimulating and innovative challenges. I am highly motivated by the prospect of continuing to learn and embrace new opportunities.\n" +
            "\n" +
            "I am excited to apply my passion for data and my eagerness for personal growth to contribute positively to your team and tackle new challenges together.",
    },
    it: {
        aboutTitle: 'Chi Sono',
        aboutText: "Sono Francesco Fazio, un data scientist con una grande passione per i dati e il loro potenziale nel rivelare informazioni preziose. Ho conseguito una Laurea Magistrale in Scienze Informatiche e Intelligenza Artificiale presso l'Università della Calabria, dove ho sviluppato una solida comprensione dei principi della data science e del machine learning.\n" +
            "\n" +
            "Durante la mia esperienza professionale, ho avuto l'opportunità di esplorare e approfondire diversi aspetti dell'analisi dei dati, acquisendo competenze che mi hanno permesso di affrontare sfide stimolanti e innovative. Sono particolarmente motivato dalla possibilità di continuare a imparare e a mettermi alla prova in nuovi contesti.\n" +
            "\n" +
            "Sono entusiasta di poter applicare la mia passione per i dati e il mio desiderio di crescita personale per contribuire positivamente al tuo team e affrontare insieme nuove sfide.",
    },
    jp: {
        aboutTitle: '自己紹介',
        aboutText: "私はファツィオ フランチェスコです。データとその持つ潜在的な価値に対する深い情熱を持つデータサイエンティストです。カリアブリア大学で情報科学と人工知能を学び、データサイエンスと機械学習の原則についての堅実な理解を深めました。\n" +
            "\n" +
            "職業経験を通じて、データ分析のさまざまな側面を探求し、刺激的で革新的な課題に取り組むスキルを身につけました。新しい分野で学び続け、自己成長を遂げることに非常に意欲的です。\n" +
            "\n" +
            "データに対する情熱と成長への意欲を活かし、あなたのチームに貢献し、一緒に新たな挑戦に取り組むことを楽しみにしています。",
    }
};
export const trad = {
    en: {
        skillsTitle: 'Skills',
        // altre traduzioni...
    },
    it: {
        skillsTitle: 'Competenze',
        // altre traduzioni...
    },
    jp: {
        skillsTitle: 'スキル',
        // altre traduzioni...
    },
};
export const trad1 = {
    en: {
        skillsTitle: 'Portfolio',
        // altre traduzioni...
    },
    it: {
        skillsTitle: 'Progetti',
        // altre traduzioni...
    },
    jp: {
        skillsTitle: 'ポートフォリオ',
        // altre traduzioni...
    },
};
export const contactInfo = {
    it: {
        title: "Contatti",
        email: "Email",
        cv: "CV",
        github: "GitHub",
        emailLink: "francescofazio1100001@gmail.com",
        cvLink: "https://drive.google.com/file/d/1NPBZmZhmC_tRacow8GKThbkSOUqLsqU2/view?usp=sharing",
        githubLink: "https://github.com/faziofrancesco"
    },
    en: {
        title: "Contact",
        email: "Email",
        cv: "CV",
        github: "GitHub",
        emailLink: "francescofazio1100001@gmail.com",
        cvLink: "https://drive.google.com/file/d/1NPBZmZhmC_tRacow8GKThbkSOUqLsqU2/view?usp=sharing",
        githubLink: "https://github.com/faziofrancesco"
    },
    jp: {
        title: "連絡先",
        email: "メール",
        cv: "履歴書",
        github: "GitHub",
        emailLink: "francescofazio1100001@gmail.com",
        cvLink: "https://drive.google.com/file/d/1NPBZmZhmC_tRacow8GKThbkSOUqLsqU2/view?usp=sharing",
        githubLink: "https://github.com/faziofrancesco"
    }
};