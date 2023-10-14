const getPostData = () => {
  const content = ['1. React 也是一個JavaScript函式庫只是專門用於構建UI，所以他一樣需要一個能夠運作js代碼的運行環境，而NodeJS就有這樣的用途，除了提供運行環境外，還有提供，除了提供運行環境外，還有提供函式庫的管理(npm)',
    '2. 我將屬於貼文的Styled-component獨立出一個模塊讓整個專案更有結構性、CSS-in-JS是一種模組化的表現，讓每一個component伴隨其style能更好維護與理解尤其是在重構的時候，而他最主要就是解決了傳統CSS常見的問題比如：全域命名空間的污染、特定性衝突以及缺乏封裝性。',
    '3. useState我的理解是當我需要一個暫存空間且會一直更動時會使用，而useEffect則是當我的需求是某個特定元件一改變就要觸發某件事（re-render）時會使用。',
    '4. Client-side跟Server-side rendering最主要的差別就是HTML的產生時機，SSR是在server就把資料建立起HTML，CSR則是要client端在請求的當下自己透過server傳來的js去慢慢建立HTML。 利用getServerSideProps這個非同步執行的函式可以在一收到請求時就將一些HTML提前生成好',
    '5. Component Naming,Quotes,Spacing,Tags'];
  return [
    {
      id: 1,
      title: 'This is a sample post',
      content: content,
      date: '2023-10-14',
    }
  ];
};

export default getPostData;