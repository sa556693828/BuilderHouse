import Filecoin from "@/assets/Prizes/Filecoin.svg";
import Lead from "@/assets/Prizes/Lead.png";
import Wormhole from "@/assets/Prizes/wormhole.png";
import bingX from "@/assets/Prizes/bingX.png";
import bingxVe from "@/assets/Prizes/bingxVe.png";
import huobi from "@/assets/Prizes/huobi.png";
import chaintimes from "@/assets/Prizes/chaintimes.png";
import Orderly from "@/assets/Prizes/Orderly.svg";
import Mexc from "@/assets/Prizes/mexc.png";

const prizeArray = [
  {
    title: "Orderly",
    prize: "$10,000",
    pic: Orderly.src,
    data: {},
  },
  {
    title: "Lead Capital",
    prize: "$5,000U",
    pic: Lead.src,
    data: {
      title: "針對市場波動進行預測分析",
      prize: "獎金金額：$5000U",
      illustrate: `『波動』，是金融市場中即具重要的一個元素，波動產生的套利空間使套利者願意承擔風險進行套利。相較於傳統金融，加密貨幣市場便具有波動大風險高的特性，即便如此，高風險所伴隨的高報酬仍然吸引眾多交易者進入市場進行交易。`,
      content: [
        {
          title: `1. 請針對市場波動進行預測分析，方法不限`,
          detail: [
            `若以『時間』作為採樣標準，請預測 3000ms 後市場狀態`,
            `若以『交易』作為採樣標準，請預測 300 ticks 後市場狀態`,
            `將依照准確度作為評分標準`,
          ],
        },
        {
          title: `2. 請使用分析結果建構一交易模型，回測結果須考慮手續費、滑價、成交與否等因素`,
          detail: [],
        },
      ],

      source: ``,
    },
  },
  {
    title: "Wormhole",
    prize: "$2,000",
    pic: Wormhole.src,
    data: {
      title: "利用 Wormhole 實現跨鏈功能的創新應用開發競賽",
      prize: "獎金金額：$2,000U",
      illustrate:
        "獎金將根據參賽團隊提出的創新程度、實用性、用戶體驗和技術實施等各方面的優秀性來分配。每個獎金級別的獲得者將由專業評審團決定。",
      content: [
        {
          title: `1. 應用必須利用 Wormhole 實現跨鏈功能，並能在多個區塊鏈生態系統中運作。`,
          detail: [],
        },
        {
          title: `2. 應用可以是DeFi、NFT、遊戲或其他領域的應用，但必須具有實際的用途和潛在的市場價值。`,
          detail: [],
        },
        {
          title: `3. 應用的設計和實現必須優秀，包括但不限於用戶體驗、性能和安全性。`,
          detail: [],
        },
        {
          title: `4. 應用必須有完整的文檔和代碼註釋，以便評委和社區成員理解和評估。`,
          detail: [],
        },
      ],
      source: `Wormhole社區和開發者論壇：https://wormhole.com/community`,
    },
  },
  {
    title: "FileCoin",
    prize: "$2,000",
    pic: Filecoin.src,
    data: {
      title: `使用 Filecoin 和 IPFS 創建創新的去中心化應用\n包括各種領域，如媒體共享、社交媒體、去中心化金融（DeFi）等`,
      prize: "獎金金額：$2,000U",
      illustrate:
        "獎金將根據參賽團隊提出的創新程度、實用性、用戶體驗和技術實施等各方面的優秀性來分配。每個獎金級別的獲得者將由專業評審團決定。",
      content: [
        {
          title: `1. 應用必須是全新的，不能是從已存在的應用中簡單地修改或增強。`,
          detail: [],
        },
        {
          title: `2. 必須有實際的用途和價值，並且應能夠解釋它如何解決問題。`,
          detail: [],
        },
        {
          title: `3. 應用的設計和實現必須優秀，包括但不限於用戶體驗、性能和安全性。`,
          detail: [],
        },
        {
          title: `4. 提交的項目必須是開源的，許可證需為 MIT 和 APACHE2。`,
          detail: [],
        },
        {
          title: `5.產品的技術實現必須穩固，並且在黑客松期間必須展示工作的原型或演示。`,
          detail: [],
        },
      ],
      source: `Filecoin 官方文檔和開發者工具：https://docs.filecoin.io/\nFilecoin Grants 提案模板和指南：https://github.com/filecoin-project/devgrants\nFilecoin 社區和開發者論壇：https://docs.filecoin.io/basics/project-and-community/chat-and-discussion-forums/\nFilecoin Dev Grants GitHub 倉庫：https://github.com/filecoin-project/devgrants\nIPFS官方文檔：https://docs.ipfs.io/\n\n提案時，你需要包含以下內容：\n項目名稱：你的項目或提案的名稱。\n項目描述：一個關於你的項目是什麼，它做什麼，以及為什麼它是重要的簡短概述。\n團隊信息：你和你的團隊成員的信息，包括你們的技能和經驗，以及你們為什麼適合執行這個項目。\n詳細設計：你打算如何實現你的項目的詳細計劃，包括技術細節和你打算使用的工具。\n時間表：你打算在多長時間內完成這個項目，包括任何重要的里程碑。\n預算和資金用途：你需要多少資金，以及你打算如何使用這些資金。\n許可證：你的項目將會在哪種開源許可證下發布。\n支持和參與：你打算如何讓社區參與到你的項目中，以及你打算如何支持和維護你的項目。\n附加信息：任何你認為評審團需要知道的其他信息。`,
    },
  },
  {
    title: "BingX Ventures",
    prize: "$ -",
    pic: bingxVe.src,
  },
  {
    title: "BingX",
    prize: "$ -",
    pic: bingX.src,
  },
  {
    title: "Chaintimes Ventures",
    prize: "$ -",
    pic: chaintimes.src,
  },
  {
    title: "MEXC Global",
    prize: "$ -",
    pic: Mexc.src,
  },
];
const prizeData = {
  title: { name: "PRIZES", color: "red" },
  subTitle: "獎金",
  id: "Prizes",
  data: prizeArray,
  totalPrize: "$ 19,000",
};
export default prizeData;
