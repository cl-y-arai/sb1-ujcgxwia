import { Competition } from '../types';

export const competitions: { [key: string]: Competition[] } = {
  en: [
    {
      id: '1',
      title: 'Customer Churn Prediction Challenge',
      description: 'Predict customer churn rates for a telecommunications company using machine learning models.',
      prize: '$10,000',
      deadline: '2024-05-01',
      participants: 1234,
      difficulty: 'Intermediate',
      tags: ['Classification', 'Machine Learning', 'Python'],
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      overview: 'This competition challenges data scientists to build predictive models that can identify customers at risk of churning from a telecommunications service. Using historical customer data, participants will develop algorithms to help the company proactively retain valuable customers.',
      rules: [
        'One account per participant',
        'No external data sources allowed',
        'Maximum 5 submissions per day',
        'Final submissions must include code documentation'
      ],
      evaluation: 'Submissions will be evaluated using the Area Under the ROC Curve (AUC-ROC) metric.',
      timeline: {
        start: '2024-03-01',
        end: '2024-05-01',
        evaluation: '2024-05-15'
      },
      prizes: {
        first: '$10,000',
        second: '$5,000',
        third: '$2,000'
      },
      dataset: {
        description: 'Historical customer data including usage patterns, billing information, and service interactions',
        size: '2.5GB',
        format: 'CSV'
      }
    },
    {
      id: '2',
      title: 'Climate Change Impact Analysis',
      description: 'Analyze global temperature data to predict future climate patterns.',
      prize: '$15,000',
      deadline: '2024-06-15',
      participants: 856,
      difficulty: 'Advanced',
      tags: ['Time Series', 'Deep Learning', 'R'],
      imageUrl: 'https://images.unsplash.com/photo-1564352969906-8b7f46ba4b8b?auto=format&fit=crop&q=80&w=1000',
      overview: 'This competition focuses on developing accurate models for predicting climate patterns using historical temperature and environmental data. Participants will work with a comprehensive dataset of global climate measurements to forecast future trends.',
      rules: [
        'Teams of up to 4 members allowed',
        'External data must be publicly available',
        'Maximum 3 submissions per week',
        'Models must be reproducible'
      ],
      evaluation: 'Models will be evaluated using RMSE on a hidden test set of future temperature measurements.',
      timeline: {
        start: '2024-04-01',
        end: '2024-06-15',
        evaluation: '2024-06-30'
      },
      prizes: {
        first: '$15,000',
        second: '$7,500',
        third: '$3,500'
      },
      dataset: {
        description: 'Global temperature measurements, atmospheric data, and environmental indicators',
        size: '5GB',
        format: 'Parquet'
      }
    }
  ],
  ja: [
    {
      id: '1',
      title: '顧客離脱予測チャレンジ',
      description: '機械学習モデルを使用して、通信会社の顧客離脱率を予測します。',
      prize: '1,000万円',
      deadline: '2024年5月1日',
      participants: 1234,
      difficulty: 'Intermediate',
      tags: ['分類', '機械学習', 'Python'],
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      overview: 'このコンペティションでは、データサイエンティストが通信サービスから離脱するリスクのある顧客を特定できる予測モデルを構築することに挑戦します。過去の顧客データを使用して、企業が価値のある顧客を積極的に維持できるようなアルゴリズムを開発します。',
      rules: [
        '参加者1人につき1アカウント',
        '外部データソースの使用禁止',
        '1日あたり最大5回の提出',
        '最終提出にはコードドキュメントを含める必要あり'
      ],
      evaluation: '提出されたモデルはROC曲線下面積（AUC-ROC）指標を使用して評価されます。',
      timeline: {
        start: '2024年3月1日',
        end: '2024年5月1日',
        evaluation: '2024年5月15日'
      },
      prizes: {
        first: '1,000万円',
        second: '500万円',
        third: '200万円'
      },
      dataset: {
        description: '利用パターン、請求情報、サービス対応を含む過去の顧客データ',
        size: '2.5GB',
        format: 'CSV'
      }
    },
    {
      id: '2',
      title: '気候変動影響分析',
      description: 'グローバルな気温データを分析し、将来の気候パターンを予測します。',
      prize: '1,500万円',
      deadline: '2024年6月15日',
      participants: 856,
      difficulty: 'Advanced',
      tags: ['時系列分析', 'ディープラーニング', 'R'],
      imageUrl: 'https://images.unsplash.com/photo-1564352969906-8b7f46ba4b8b?auto=format&fit=crop&q=80&w=1000',
      overview: 'このコンペティションは、過去の気温と環境データを使用して気候パターンを予測する正確なモデルの開発に焦点を当てています。参加者は、グローバルな気候測定の包括的なデータセットを使用して将来のトレンドを予測します。',
      rules: [
        '最大4名までのチーム参加可能',
        '外部データは公開データのみ使用可能',
        '週あたり最大3回の提出',
        'モデルは再現可能である必要あり'
      ],
      evaluation: 'モデルは将来の気温測定の隠されたテストセットを使用してRMSEで評価されます。',
      timeline: {
        start: '2024年4月1日',
        end: '2024年6月15日',
        evaluation: '2024年6月30日'
      },
      prizes: {
        first: '1,500万円',
        second: '750万円',
        third: '350万円'
      },
      dataset: {
        description: 'グローバルな気温測定、大気データ、環境指標',
        size: '5GB',
        format: 'Parquet'
      }
    }
  ]
};