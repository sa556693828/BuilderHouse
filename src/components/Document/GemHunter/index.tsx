import Bla from "@/assets/Hunter/bla.svg";
// import Filecoin from "@/assets/Hunter/Filecoin.svg";
// import Wormhole from "@/assets/Hunter/wormhole.png";
// import bingX from "@/assets/Hunter/bingX.png";
// import bingxVe from "@/assets/Hunter/bingxVe.png";
// import huobi from "@/assets/Hunter/huobi.png";
// import chaintimes from "@/assets/Hunter/chaintimes.png";
// import Orderly from "@/assets/Hunter/Orderly.svg";

const hunterArray = [
  {
    title: "Blablablock",
    prize: "-",
    pic: Bla.src,
    content: {},
  },
  // {
  //   title: "FileCoin",
  //   prize: "$2,000",
  //   pic: Filecoin.src,
  //   content: {
  //     title: `使用 Filecoin 和 IPFS 創建創新的去中心化應用\n包括各種領域，如媒體共享、社交媒體、去中心化金融（DeFi）等`,
  //     prize: "獎金金額：$2000U",
  //     illustrate:
  //       "獎金將根據參賽團隊提出的創新程度、實用性、用戶體驗和技術實施等各方面的優秀性來分配。每個獎金級別的獲得者將由專業評審團決定。",
  //     content: `1.應用必須是全新的，不能是從已存在的應用中簡單地修改或增強。\n2.必須有實際的用途和價值，並且應能夠解釋它如何解決問題。\n3.考慮用戶體驗和介面設計。\n4.提交的項目必須是開源的，許可證需為 MIT 和 APACHE2。\n5.產品的技術實現必須穩固，並且在黑客松期間必須展示工作的原型或演示。`,
  //     source: `Filecoin 官方文檔和開發者工具：https://docs.filecoin.io/\nFilecoin Grants 提案模板和指南：https://github.com/filecoin-project/devgrants\nFilecoin 社區和開發者論壇：https://docs.filecoin.io/basics/project-and-community/chat-and-discussion-forums/\nFilecoin Dev Grants GitHub 倉庫：https://github.com/filecoin-project/devgrants\nIPFS官方文檔：https://docs.ipfs.io/\n\n提案時，你需要包含以下內容：\n項目名稱：你的項目或提案的名稱。\n項目描述：一個關於你的項目是什麼，它做什麼，以及為什麼它是重要的簡短概述。\n團隊信息：你和你的團隊成員的信息，包括你們的技能和經驗，以及你們為什麼適合執行這個項目。\n詳細設計：你打算如何實現你的項目的詳細計劃，包括技術細節和你打算使用的工具。\n時間表：你打算在多長時間內完成這個項目，包括任何重要的里程碑。\n預算和資金用途：你需要多少資金，以及你打算如何使用這些資金。\n許可證：你的項目將會在哪種開源許可證下發布。\n支持和參與：你打算如何讓社區參與到你的項目中，以及你打算如何支持和維護你的項目。\n附加信息：任何你認為評審團需要知道的其他信息。`,
  //   },
  // },
];
const hunterData = {
  title: { name: "Gen Hunter", color: "red" },
  subTitle: "獎金",
  id: "GenHunter",
  data: hunterArray,
};
export default hunterData;
