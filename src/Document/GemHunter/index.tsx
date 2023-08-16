import Bla from "@/assets/Hunter/bla.svg";
import CA from "@/assets/Hunter/ca.png";
import Friends from "@/assets/Hunter/friends.png";
import Rentii from "@/assets/Hunter/rentii.png";
import Tikki from "@/assets/Hunter/tikki.png";
import Followin from "@/assets/Partners/followIn.svg";
import Bucket from "@/assets/Hunter/bucket.png";
import Dmail from "@/assets/Hunter/dmail.png";
import Pawnfi from "@/assets/Hunter/pawnfi_logo.png";
import Bonk from "@/assets/Hunter/bonk.png";
import Genopets from "@/assets/Hunter/genopets.png";
import Paraspace from "@/assets/Hunter/paraspace_logo.png";
import Mexc from "@/assets/Prizes/mexc.png";
import Orderly from "@/assets/Prizes/Orderly.svg";
import noneland from "@/assets/Partners/noneland.svg";


// import chaintimes from "@/assets/Hunter/chaintimes.png";
// import Orderly from "@/assets/Hunter/Orderly.svg";

//icon-website
//icon-twitter
//icon-discord
//icon-telegram
const hunterArray = [
  {
    title: "MEXC",
    prize: "1,000USDT",
    pic: Mexc.src,
    data: {
      title: "MEXC",
      linkArr: [
        { icon: "icon-website", link: "https://www.mexc.com/zh-TW/register?inviteCode=mexc-TBH" },
      ],
      illustrate: "註冊任務",
      content: [
        {
          title: `點選上方網站連結進行註冊`,
          detail: ['前100名註冊每位將額外活得10USDT'],
        },
      ],
    },
  },
  {
    title: "Followin",
    prize: "Task",
    pic: Followin.src,
    data: {
      title: "Followin",
      linkArr: [
        { icon: "icon-website", link: "https://followin.io/" },
        { icon: "icon-twitter", link: "https://twitter.com/followin_io" },
        { icon: "icon-telegram", link: "https://t.me/followin_io" },
        { icon: "icon-discord", link: "https://discord.com/invite/vPdAfjZ7ja" },
      ],
      illustrate: "完成新手任務",
      content: [
        {
          title: `1. 成功綁定錢包`,
          detail: [],
        },
        {
          title: `2. 關注一個項目`,
          detail: [],
        },
        {
          title: `3. 綁定Twitter`,
          detail: [],
        },
      ],
    },
  },
  {
    title: "NONE LAND",
    prize: "Task",
    pic: noneland.src,
    data: {
      title: "NONE LAND",
      linkArr: [
        { icon: "icon-website", link: "https://none.land" },
      ],
      illustrate: "NONE LAND aims to bring Web3 to a broader audience, reaching beyond blockchain enthusiasts and connecting with everyone.By transforming intricate Web3 topics into entertaining and comprehensible content, NONE LAND has become the most approachable Web3 media brand. Together, let's forge a future of limitless possibilities",
      content: [
        {
          title: `1. 追蹤 NONE LAND Instagram`,
          detail: [],
        },
        {
          title: `2. 訂閱 NONE LAND Youtube`,
          detail: [],
        },
        {
          title: `3. 加入 NONE LAND 官方 Line 社群`,
          detail: [],
        },
      ],
    },
  },
  {
    title: "Blablablock",
    prize: "Task",
    pic: Bla.src,
    data: {
      title: "Blablablock",
      linkArr: [
        { icon: "icon-website", link: "https://www.blablablock.com" },
        { icon: "icon-twitter", link: "https://twitter.com/__BlablaBlock__" },
        { icon: "icon-discord", link: "https://discord.com/invite/C82wRDecbS" },
      ],
      illustrate: "購買$BLA；更聰明地交易加密貨幣！",
      content: [
        {
          title: `1. 至官網點擊「Get Started」`,
          detail: [],
        },
        {
          title: `2. 註冊帳號並進入使用介面`,
          detail: [],
        },
        {
          title: `3. 點擊右上角連結MetaMask錢包（BSC鏈）`,
          detail: [],
        },
        {
          title: `4. 於首頁購買10$USDT的$BLA代幣`,
          detail: [],
        },
      ],
      //source: ``,
    },
  },
  {
    title: "Bonk",
    prize: "-",
    pic: Bonk.src,
    data: {
      title: "Bonk",
      linkArr: [
        { icon: "icon-website", link: "https://www.bonkcoin.com/" },
        { icon: "icon-twitter", link: "https://twitter.com/bonk_inu" },
      ],
    },
  },
  {
    title: "Bucket Protocol",
    prize: "Task",
    pic: Bucket.src,
    data: {
      title: "Bucket Protocol",
      linkArr: [
        { icon: "icon-website", link: "https://app.bucketprotocol.io/" },
        { icon: "icon-twitter", link: "https://twitter.com/bucket_protocol" },
        { icon: "icon-telegram", link: "https://t.me/bucketprotocol" },
        { icon: "icon-discord", link: "https://discord.com/invite/nYCnNJE6Tr" },
      ],
      illustrate: "完成建立倉位和質押$BUCK至協議",
      content: [
        {
          title: `1. 建立一個倉位Position (最小金額10 $BUCK, 建立CR%: 150%以上, 15鎂等值的SUI, 以目前SUI價格是0.7, 需存入約21.4顆SUI)”`,
          detail: [],
        },
        {
          title: `2. 將任意數量的$BUCK質押到Tank中`,
          detail: [],
        },
      ],
    },
  },
  {
    title: "Crypto Arsenal",
    prize: "Task，免費一個月使用",
    pic: CA.src,
    data: {
      title: "Crypto Arsenal",
      linkArr: [
        { icon: "icon-website", link: "https://crypto-arsenal.io/" },
        { icon: "icon-twitter", link: "https://twitter.com/CryptoArsena1" },
        { icon: "icon-telegram", link: "https://t.me/TG_Crypto_Arsenal" },
        { icon: "icon-discord", link: "https://discord.com/invite/DfVSwYprvK" },
      ],
      illustrate: "完成任務者，提供平台 Starter 方案一個月 (價值 29 USDT)",
      content: [
        {
          title: `1. 註冊 Crypto-Arsenal ”`,
          detail: [],
        },
        {
          title: `2. 創建 API Key : 連結一個交易所 `,
          detail: [],
        },
        {
          title: `3. 根據自己的角色，做到其中一點 (至少要有一筆交易)`,
          detail: [
            "Trader: 在 Arena 或是 Trading Club 選一支策略後，跑回測 (Backtest) 和跟單一個實單 (Live trade)",
            "Quant: 創建自己的策略後，進行模擬以及實單 (Live trade)",
          ],
        },
      ],
    },
  },
  {
    title: "Dmail",
    prize: "Task",
    pic: Dmail.src,
    data: {
      title: "Dmail",
      linkArr: [
        { icon: "icon-website", link: "https://dmail.ai/" },
        { icon: "icon-twitter", link: "https://twitter.com/Dmailofficial" },
        { icon: "icon-discord", link: "https://discord.com/invite/5HH4R5KTA3" },
      ],
      illustrate: "購買NFT域名",
      content: [
        {
          title: `1. 使用任意钱包登录Dmail`,
          detail: ["https://mail.dmail.ai/setting/account/100006"],
        },
        {
          title: `2. 参与Presale，购买任意NFT域名账号`,
          detail: ["https://mail.dmail.ai/presale/100006"],
        },
      ],
    },
  },
  {
    title: "Friends Protocal",
    prize: "Mint 50%OFF",
    pic: Friends.src,
    data: {
      title: "Friends Protocal",
      linkArr: [
        { icon: "icon-website", link: "https://4riends.org/" },
        { icon: "icon-twitter", link: "https://twitter.com/FriendsProtocol" },
        { icon: "icon-telegram", link: "https://t.me/Friends_Protocol" },
      ],
      illustrate: "",
      content: [
        {
          title: `1. 到 Telegram 上搜尋 “@FriendsProtocol_Bot”`,
          detail: [],
        },
        {
          title: `2. 使用bot Mint 一張 Friends NFT (15 TON)`,
          detail: [],
        },
        {
          title: `3. 完成任務`,
          detail: [],
        },
      ],
    },
  },
  {
    title: "Genopets",
    prize: "-",
    pic: Genopets.src,
    data: {
      title: "Genopets",
      linkArr: [
        { icon: "icon-website", link: "https://www.genopets.me/" },
        { icon: "icon-twitter", link: "https://twitter.com/genopets" },
        { icon: "icon-discord", link: "https://discord.com/invite/genopets" },
      ],
    },
  },
  {
    title: "Paraspace",
    prize: "Task",
    pic: Paraspace.src,
    data: {
      title: "Paraspace",
      linkArr: [
        { icon: "icon-website", link: "https://para.space/" },
        { icon: "icon-twitter", link: "https://twitter.com/ParaSpace_NFT" },
        { icon: "icon-discord", link: "https://discord.com/invite/paraspace" },
      ],
      illustrate: "",
      content: [
        {
          title: `1. Supplying ERC-20/ERC-721”`,
          detail: [],
        },
        {
          title: `2. Borrowing ERC-20`,
          detail: [],
        },
        {
          title: `3. Follow Social Media`,
          detail: ["Twitter：@ParaSpace_NFT @ParaSpace_CN", "Join Discord"],
        },
      ],
    },
  },
  {
    title: "PwanFi",
    prize: "-",
    pic: Pawnfi.src,
    data: {
      title: "PawnFi",
      linkArr: [
        { icon: "icon-website", link: "https://pawnfi.com/" },
        { icon: "icon-twitter", link: "https://twitter.com/pawnfiofficial" },
        { icon: "icon-telegram", link: "https://t.me/pawnfiprotocol" },
        { icon: "icon-discord", link: "https://discord.com/invite/pawnfi" },
      ],
    },
  },
  {
    title: "Rentii",
    prize: "-",
    pic: Rentii.src,
    data: {
      title: "Rentii",
      linkArr: [
        { icon: "icon-website", link: "https://www.rentii.xyz/" },
        { icon: "icon-twitter", link: "" },
        { icon: "icon-telegram", link: "" },
        { icon: "icon-discord", link: "" },
      ],
      illustrate: "",
      content: [
        {
          title: `1. 至官網點擊connect wallet`,
          detail: [],
        },
        {
          title: `2. 連接Solana錢包`,
          detail: [],
        },
        {
          title: `3. 點擊出租或是租入一張NFT`,
          detail: [],
        },
      ],
    },
  },
  {
    title: "Tikki",
    prize: "-",
    pic: Tikki.src,
    data: {
      title: "Tikki",
      linkArr: [
        { icon: "icon-website", link: "https://app.tikki.app/explore" },
        { icon: "icon-twitter", link: "https://twitter.com/Tikki_NFT" },
        { icon: "icon-discord", link: "https://discord.gg/edMrxhjn" },
      ],
      illustrate: "對於早期交互用戶們，放心我們都懂Web3的規矩",
      content: [
        {
          title: `1. 註冊登入Tikki`,
          detail: ["https://app.tikki.app/explore"],
        },
        {
          title: `2. 驗證任意錢包至自己的UID上`,
          detail: ["進入Tikki - 點擊Wallets - Add Wallets"],
        },
        {
          title: `3. 關注@Tikki_NFT 並轉推至頂貼文`,
          detail: ["Twitter：@ParaSpace_NFT @ParaSpace_CN", "Join Discord"],
        },
      ],
    },
  },
];
const hunterData = {
  title: { name: "Gem Hunter", color: "red" },
  subTitle: "獎金",
  id: "GemHunter",
  data: hunterArray,
  totalPrize: 3000,
};
export default hunterData;
