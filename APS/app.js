const { useState } = React;

// Produtos iniciais disponíveis no sistema
const initialProducts = [
  { id: 1, name: 'Maçã', price: 2, image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExIVFhUSEhUYFhYVFRgXFRUVFRUXFhUVFxUYHSggGBslGxUVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUtKy0vLS0tLi0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAwECBAYHBQj/xABBEAACAQIDBgMFBQUFCQAAAAAAAQIDEQQhMQUGEkFRYQdxgRMikaGxMkLB0fAjUmJy4RZTgtLxFBUzNENjc5Ki/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECBAMGBf/EACwRAAICAgIBBAECBgMAAAAAAAABAhEDIQQSMQUTIlFBMpEUQmFxgaEGFTP/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFsppK7ySFguBqe1t/wDCUrqEnUmnbhjkv/Z5Gv4jxRlpChHs5Sf0sszNPl4o6s4y5GOOmzpgOTR8Ua6edGm16ry5s9PZ3inTk0qtFxWWcXf1sVjzcT/JRcvC3VnRgeZsnb2HxK/ZVFJ81pJejPSualJSVo0Jp+CoAJJAAAAAAAAAAAAAAAAAAAAAAAAAAAABh7W2hChSlVqP3Yr1b5Jd2RKSirYbortDHwox4pu3Rc35HKt9d6K1d+zhJxp81F2vnzflyPN25vJWr1HOWS0jFaRXTzPFnUbfP/U+JyeY8nxj4Pm58zn8VpEcad3pyz+KJv8AZ8nYtV+q1+pk0W+av3RiSlJ6MyxL6MKpRIPYtLI9Sdm780WcHUvUouirxJuyLC4icLShNqS0aea6G+7seIMsoYlcS/vF9pea5mgwp8ixxadi+LPPG9M7wnKG0fQ2Bx9OrHipyUl2ea81yMk4BsbbFfDzUoTt16NLk1zOq7sb5U8RaFRezqcs/dn/ACvr2PsYOXHJp6ZuxZ1Pzo2oFLkOKxcKceKpOMIrVyaS+LNdmgnBibP2lSrx46VSM49YtPXQyrkJ2GqKgpcEgqAAAAAAAAAAAAAAAAAAYeN2bTq29pHiS5Nu3nYzAVlFSVMHl1N3sK1wuhTt/Ka/tfw8w9RN0m6UvWUfg2boDlPjYpKnFFJQjLTRxDbm6GJwzu1xx/egm16rVHjSlbz08j6GcTXdt7mYbEZuPBL96FlfzXMwZOBJO8bM0uNX6Tj8MUlkQ1K8V69GbntPwyrq7o1Yz7T912+FjVNpblY+mm3Qm1HXh95easZumWP6kZ5xyR/lIG01dSV/16ENWp8e55c6dSD95Si+jTRJDaDWvTlzKdPJw9xPT0epRaenKxmQT1Ts/wBZmv08bFZ8K78voehR2iss3muay+K/I6RikXU4nSd2t/OGn7LEJynBe7LTjj37o1nxV3ujUp0LQlwRqvjjxW404NWvbzPBWIakpqKdtbZq3Roi3yoRrYFVYW/ZTi3bmpXi7+V0b8eVyj0keg9NUckHK/kjI3I34qwq1HSpxp0lC3AlfNv3W36M2irv5i5XtfXlH+hrng/gKc6NaUoq6qxV+3Dc6PDA080ksjsk46j4NzhjaTkrZqf9uMWnnN+WS/Ay8Jv3ir5yv2aT+h6eI3bhKTuln8jExuxKdBcS15WyIc5xO8eNgyUvB7uzd/E8qsM+sX+Bs+B2xRq/YqK/RuzOZ7M2LVqXcHwp6vm/NvM9ijsGnTzlUlfsdMeRvyZORwowdQds6Hcqa5s/aUIWXtW1/F+Z7mHxUJr3ZJ+TOqafgwSxyj+pE4FwSUAAAAAAAAAAAAAAAABZUqKKbbSSV23okuYBBtDHU6NOVWpJRhFXbZxDfPxPq15Onhrxpq64nlfvbmYHiNvnLH1XTpu2Gpu0f+41999uhqUKKyMmXPWkeh9P9J7JTyfsSy2pXd3KfFf7sldeeehWnjU8pRSv8P6GbszZjqysbdQ3NjJK8c+btlbp5mXqp/g2c30jiSjWTT/2ajhaCqZxi7LW2ZK4Qi0s9Db57j8KvFtX6aGLPYdSCtdtd8zlLBP/AAeZyf8AHYv/AMsn7mt1nJRvnFJa6P4nm4vEznQkoVZK8Xxx+7O2bXZq2puuA2VBt+2fEmrZvIR2Rs+k3LhnLNe45e78FmzRCPWmbfTfS/4ft323rR43hftPgpVYNpcUoNXaXJp6nRsFVXDd1Fd68L4v6Hg4HDwqSXBhIQjD7NopZeR7dDY9STTeSvounQs5Sb0j7P8AD44QSnLZlPaKjnHPvJ5kUdrTbzt5tGb/ALmitEVWzV0JqZzUuP8ARiLbM07Z+hY9rqWTeZk4jZS5Hi4rZ7TzKuU15O+KOCfgyMRUybTPLe0qlOXFCTTXctrylSllJNW5/QxJzU3llxcu5aMy+fjpx+0b5u5vsptU62T6/mbrTmmrp3T5nz9iJuOuscr88mbnuRvc4tUqjvF5J9DXCdnm+VxHjdxOogthJNJrNNFx0MAAAAAAAAAAAAAZy/xp3p9jRWCpStUrq9RrWNK+n+J5eVzpWJrxhCU5O0YRcm+iirv6HyzvDtSeMxVbEu9pzbX8ME7QXwscssusTf6dg93Lb8IwKaMmiY9NGbTjdZWXCs883nrY+bM9pxkepsXHKlNSenM7BsHE06kFZ6/XzOGo9zY+8VWgow4vcTvbmXw5KeyPUOG+RG4+TtE4IxcRhE1oazsre2nUSV8+dz1a28dOCV3lbka7izzMsGbHKmtmLiN3OPlkTYXdiEc3HMlwe9VCWXHmvj6mUt4ad7XJUYkSy8ha2T4XBRhyMziSPCxG2lfJo8nG7x2/1IcooY8GXI9m3VsQiB4qJps944LKTalo09U+ljExW8kY/e1ODzo+lj9Mm14N3rYxHk47HRs+djSa+9knfLIwf7SdU/jmQsiZo/6+eMzt4MZa7va2h4uF2tyl6Mwdo432krtZLRfizGvHgvnxcXpw2+tysmvwaox+NS8mxVcTx3zz69fMw8HiJRlleyte3K7sm+h5lGpJpviXuq+bzfLLrqVdbO9/tKzXXsxGbTMvI48ZRO8eHW8PtYexm/eivd7robufOu622JUqsJp/Za+Fz6CwOJVSnGa0kkz6MZdlZ5HkYvbm0ZAALHAAAAAAAAFGAab4s7R9js2tZ2lWtSX+P7XyufOdNHXvH7G/8rQWjc6j9LRX1ZyahC7tdLu9EY+RLdHpPSMVYr+ySmiZEUCS5jZ6PHSRfGRXjImxFkUdfc/BOptZpteRfDGTeUqkuHzb+RjupkROR07fRzk1ZkxqTV5JvK1356XM2jteullJnlKR6GGa0utG88tFctGTObjF7aMpbVrc3bzMPE4yUtZGLVxDcrXyIqjIlK9ExcYx0jJliG3dtt92WusYjkVgzn0JXJfgmdQjuWTZfDENRccrStyzy6PkWo5yyW9ivVcnd/q2RFcoytixxcmwmUkIktau3TULL3ZNp2zz5X6Aq38TK2Ri17S2l7fG2Z9B+HuN48PwN5wPnDZcLzT7ncPDDEe9w9Y/Q3YPDR5n1OPyUjpIAOx8sAAAAAABgMA4D43Yni2jGP8Ad0Ir1k2/yNEizbvFt32nV/lh9DUmj5+V3JnsfT49cEf7EtO1ndu/LLV359MrlEyGJIcWj6MZaLrlatZyabeiS9ErIx5MXJoq8hO452utdeXmWSVm1e+eq0ZGmUuKKuZJFlZSI7hskd9C5fJ5FhSTFFe1ItbJcO1969rPTW/IhLpRat3V/Qmjmnuy6TLUUTKpiibtlUGy1MqBei6nUsmrLO2fNW6EscPxSUU07pPLutPMspUeJ2Nk2Hs62bs1nbLPO35FoxtnPJkUI7MDZGzpRqNtcvmdS8P8q0bc8vkarGmuLJG47lw/bQXe/wAmbcao83zZ9zpRUoVOh84AAAAAABgAHz/4x4fh2g5fvQi/kaJOfI61447NcqlGql9xp+jORmDLGpM9bwMvbjxorGSJLmOieatbO+Xw7HJo2wmy6lFNpSdk3m7XsutkWTKORRTCJlJAMTRWKur201JK/wBC5aFlSV/QKRJXpJP7SfdAl7WiOBVysmupbctbFFXLQTLyxDiJoqnQBWxeoglRstRVICMrEUWVGdgUbLs+drdjVsLWsbHsibflkd4Iwcrfk9ulT9/yN33HpXq3/dX4WNOoK7b6nRNx8Lwwcuv4mqC0fA5MvwbUACxkAAAAAAAAANQ8ScD7TDKVvsN/Bo+fcfhWpZLV2t3PqfaOFVSnKD+9FnDt49iRhJ5W974WOOWNqz6vpvIUH1ZzqwRm18E1Nx82r8+ZiPUxs9AlpMt4isZWehY1mVZNFbZKs8ixSauFIuqtPRW+ZBe7Vlg4ilykIt6Ik59mX0qjjK61FikSRp9CGXirKq7sn6Eleir3jfhenFq/gRRZe5PQHVJNFkZJaq5KpS4X+7Jq/drNEXDe+enzK2YCKFXBW1z6F/s3w8XJO3qyPiJoOvyVinl3N02HStHLotevM1TDz45K6XupLLt+JvuwcPeK6GiCs+XzZ1o9bZ+GuzqOx8NwUorm8zUN2cBx1F0Wb9DfEaTzuSVsqAAcwAAAAAAAAAaRv1sdNOollLXz6m7kOLw6qRcZaNEMtCTi7R847e2c9Us0a1Xg+J5Ws9Oh1vefYrhKUbaX9Uc72tgeF8S9THlg0eo4PJjkj1keHKxWpPitfkrehdVV3oR2s2nyOSNktOg45u17F1Ck5XS5Jv4FqatqE7MFVVlXBtpJXfJJZlsLp809PzLvaNO6dmtGtUVk283q+ZI6pvRakTLlfNZc+XTsW1VK+bzDlZFWdYqi6STbayV8lm/S4jK18k8rZ8u/mUoq+RSLzzBKqi2xfK44r6IjTLpFW0irZWUsuHo/1mWxSvnkiko8+V8mGU7PyZmz4cVRRjfO2vU6xsvCcMIwWuXxepoe5mBbnxy+7odg3X2bxSUnpHN/ka8UdHwPUc3zpGx7v4H2VNX1lmz1AgdT5IAAAAAAAAAAAAAAB5G8GyFXhl9uKy79jku2dmZtWtKLeTR3E1TfLd91IutSXvxV5JfeS6dyko2jRx8zxyPnzaGEcJaWMCcbvzNz2zRUk01mjVcVSej5aGVwpnoocjvBGFVg4ycX8syxTsyWdPNGPNPm9RSIlKUdolbs872/AvzzVtPkiDO1+hdGTWj5fpEdS6yEyvqVqNtOWb6v82RpfLmKj5J5fUrWzv3+JemiyN28hxWKrR5evQUQ5WU4mtGSUZpWur5/FdCC5fJrk3/UtRVSL6tr/rLsZGBpuclZXSeSZBwOTWjz5c+bN03a2Uv+I1aK/WReMLZm5PJ6Jmw7t7O4FFW6X7t6I63snB+ypqPPV+fQ1LcbZ/tJe3a/Z03aH8UucvJfXyN6NS0jzeSTlK2AASUAAAAAAAAAAAAAAAAAAOb+I+6TaliaEb2u6kFqus4rp1XqcZxk07n1ccu8QfCmOJ4q+CkqVZ5ypPKlUfO1l7kvl5anOULNnH5PTTOG1KqsY3tc/Qn29sjF4SfBiqFSlJ6Oa92X8s17svRs8p4gp7bNj5qf5M5VORIpWR7O724O08XFTpYWag3lUqtUovK91xtOS7xTRjbxbs4vAzUMTRlDi+zPKVOX8s1k3lpr2IcGWx8qLdWYtOWV+pZzMdTy1EKmZz6mz31SRlcS5+hY5GM6xSWIJ6MrLkx+zI4y5VDBVT9cvie1uzuvj8dK2FoSlFOzqy92lF95vJvsrvsWWNmeXNjE9TYmDhdTqSSSz8zd938LUx9VUqKcaMGuOdsox7v958kezur4L0adqmOrSxE8n7OLcaKfR/en8l2OoYTCU6UVCnCMILSMIqMV6I7qNHzc3I9x2UwWEhSpxpwVowikl2ROAWMoAABQXKloILgUAJKgAAAAAAAAAAAAAAjxGHhOLjOMZResZJST808jx8Juds6lNVKeBw0Zp3UlRgnF9Y5Zeh7gABj7QwNKvTlSrU41Kc1aUJpOL9GZAAOMbz+BsZSc8DXUE/8ApV+JxXaNVXkl5pvuas/BTat9cN5+1l/kPpAEdUdPdn9nzvQ8C9otXnXwse3FUlb/AOD0cN4BVbrjx0EufDRlJ+l5I7uBRDnJnOdgeDez6DUqvtMS1mlVaVO//jilxeUm0dDo0owioxioxirKMUkkuiSyReCSrdgAAgAAAAAAFCoAKFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==', category: 'Frutas' },
  { id: 2, name: 'Banana', price: 1, image: 'data:image/jpeg;base64,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', category: 'Frutas' },
  { id: 3, name: 'Pão', price: 3, image: 'data:image/jpeg;base64,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', category: 'Padaria' },
];

// Promoções iniciais
const initialCategoryPromotions = {
  "Frutas": 0.10  // 10% de desconto para a categoria "Frutas"
};

const initialItemPromotions = {
  "Pão": { quantity: 5, discount: 0.15 } // 15% de desconto para 5 ou mais unidades de "Pão"
};

const App = () => {
  const [products, setProducts] = useState(initialProducts); // Estado dos produtos
  const [cart, setCart] = useState([]); // Estado do carrinho
  const [total, setTotal] = useState(0); // Total do carrinho
  const [totalDiscount, setTotalDiscount] = useState(0); // Total de descontos aplicados
  const [categoryPromotions, setCategoryPromotions] = useState(initialCategoryPromotions); // Promoções por categoria
  const [itemPromotions, setItemPromotions] = useState(initialItemPromotions); // Promoções específicas por item
  const [activeTab, setActiveTab] = useState("shopping"); // Aba ativa
  const [selectedProduct, setSelectedProduct] = useState(null); // Produto selecionado para edição

  // Extrai categorias únicas para seleção nas promoções por categoria
  const categories = [...new Set(products.map(product => product.category))];

  // Função para adicionar ou editar um produto
  const handleProductSubmit = (name, price, category, image) => {
    if (selectedProduct) {
      // Atualiza o produto existente
      const updatedProducts = products.map(product =>
        product.id === selectedProduct.id
          ? { ...product, name, price: parseFloat(price), category, image: image || product.image }
          : product
      );
      setProducts(updatedProducts);
      setSelectedProduct(null); // Limpa a seleção após edição
    } else {
      // Adiciona um novo produto
      const newProduct = {
        id: products.length + 1,
        name,
        price: parseFloat(price),
        category,
        image: image || 'https://via.placeholder.com/50'
      };
      setProducts([...products, newProduct]);
    }
  };

  // Função para preencher o formulário com os dados do produto selecionado para edição
  const handleProductSelect = (productId) => {
    const product = products.find(prod => prod.id === productId);
    setSelectedProduct(product);
  };

  // Função para adicionar uma promoção de desconto para uma categoria selecionada
  const addCategoryPromotion = (category, discount) => {
    setCategoryPromotions({
      ...categoryPromotions,
      [category]: parseFloat(discount) / 100
    });
  };

  // Função para adicionar uma promoção específica de desconto para um item selecionado
  const addItemPromotion = (itemName, quantity, discount) => {
    setItemPromotions({
      ...itemPromotions,
      [itemName]: { quantity: parseInt(quantity), discount: parseFloat(discount) / 100 }
    });
  };

  // Função para adicionar um produto ao carrinho ou aumentar sua quantidade
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      updateQuantity(product.id, existingProduct.quantity + 1);
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      calculateTotal(updatedCart);
    }
  };

  // Função para atualizar a quantidade de um item no carrinho
  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    calculateTotal(updatedCart);
  };

  // Função para calcular o desconto aplicável a um item
  const calculateDiscount = (item) => {
    let discount = categoryPromotions[item.category] || 0;
    if (itemPromotions[item.name] && item.quantity >= itemPromotions[item.name].quantity) {
      discount = itemPromotions[item.name].discount;
    }
    return discount;
  };

  // Função para calcular o valor total do carrinho e o valor economizado com descontos
  const calculateTotal = (updatedCart) => {
    let newTotal = 0;
    let discountSum = 0;

    updatedCart.forEach(item => {
      const discount = calculateDiscount(item);
      const discountedPrice = item.price * (1 - discount);
      newTotal += discountedPrice * item.quantity;
      discountSum += (item.price * item.quantity) - (discountedPrice * item.quantity);
    });

    setTotal(newTotal);
    setTotalDiscount(discountSum);
  };

  // Função para remover um item do carrinho
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    calculateTotal(updatedCart);
  };

  return (
    <div className="container">
      <h1>Carrinho de Compras em React</h1>

      <div className="tabs">
        <button onClick={() => setActiveTab("admin")}>Administração do Sistema</button>
        <button onClick={() => setActiveTab("shopping")}>Compras</button>
      </div>

      {/* Painel de administração para adicionar/editar produtos e promoções */}
      {activeTab === "admin" && (
        <div className="admin-panel">
          {/* Formulário para adicionar ou editar produtos */}
          <div className="product-admin">
            <h3>Cadastro de Produtos</h3>
            <select onChange={(e) => handleProductSelect(parseInt(e.target.value))} value={selectedProduct ? selectedProduct.id : ''}>
              <option value="">Selecione um produto para editar</option>
              {products.map(product => (
                <option key={product.id} value={product.id}>{product.name}</option>
              ))}
            </select>
            <input type="text" id="productName" placeholder="Nome do Produto" defaultValue={selectedProduct ? selectedProduct.name : ''} />
            <input type="number" id="productPrice" placeholder="Preço" defaultValue={selectedProduct ? selectedProduct.price : ''} />
            <input type="text" id="productCategory" placeholder="Categoria" defaultValue={selectedProduct ? selectedProduct.category : ''} />
            <input type="text" id="productImage" placeholder="URL da Imagem" defaultValue={selectedProduct ? selectedProduct.image : ''} />
            <button onClick={() => {
              const name = document.getElementById('productName').value;
              const price = document.getElementById('productPrice').value;
              const category = document.getElementById('productCategory').value;
              const image = document.getElementById('productImage').value;
              handleProductSubmit(name, price, category, image);
            }}>{selectedProduct ? 'Salvar Alterações' : 'Adicionar Produto'}</button>
          </div>

          {/* Formulário para adicionar promoções */}
          <div className="promotion-admin">
            <h3>Cadastro de Promoções</h3>
            
            <h4>Promoção por Categoria</h4>
            <select id="promoCategory">
              <option value="">Selecione uma Categoria</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <input type="number" id="promoDiscount" placeholder="Desconto (%)" />
            <button onClick={() => {
              const category = document.getElementById('promoCategory').value;
              const discount = document.getElementById('promoDiscount').value;
              addCategoryPromotion(category, discount);
            }}>Adicionar Promoção</button>

            <h4>Promoção por Item</h4>
            <select id="promoItemName">
              <option value="">Selecione um Item</option>
              {products.map(product => (
                <option key={product.id} value={product.name}>{product.name}</option>
              ))}
            </select>
            <input type="number" id="promoItemQuantity" placeholder="Quantidade Mínima" />
            <input type="number" id="promoItemDiscount" placeholder="Desconto (%)" />
            <button onClick={() => {
              const itemName = document.getElementById('promoItemName').value;
              const quantity = document.getElementById('promoItemQuantity').value;
              const discount = document.getElementById('promoItemDiscount').value;
              addItemPromotion(itemName, quantity, discount);
            }}>Adicionar Promoção</button>
          </div>
        </div>
      )}

      {/* Painel de compras com lista de promoções, produtos e carrinho */}
      {activeTab === "shopping" && (
        <div className="shopping-panel">
          {/* Lista de promoções */}
          <div className="promotion-list">
            <h3>Promoções Ativas</h3>
            {Object.keys(categoryPromotions).map((category) => (
              <div key={category}>
                <p><strong>LIQUIDAÇÃO!</strong> Todos os produtos da categoria {category} com {categoryPromotions[category] * 100}% de desconto! Aproveite!</p>
              </div>
            ))}
            {Object.keys(itemPromotions).map((item) => (
              <div key={item}>
                <p><strong>PROMOÇÃO!</strong> Na compra de {itemPromotions[item].quantity} ou mais {item} será aplicado desconto de {itemPromotions[item].discount * 100}%. Não perca essa oportunidade!</p>
              </div>
            ))}
          </div>

          {/* Lista de produtos disponíveis */}
          <div className="product-list">
            <h3>Produtos Disponíveis</h3>
            {products.map(product => (
              <div key={product.id} className="product">
                <div className="product-info">
                  <img src={product.image} alt={product.name} />
                  <span>{product.name}</span>
                </div>
                <span>Preço: R$ {product.price}</span>
                <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
              </div>
            ))}
          </div>

          {/* Carrinho de compras */}
          <div className="cart">
            <h3>Carrinho de Compras</h3>
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
                <span>Preço: <s>R$ {item.price}</s> R$ {(item.price * (1 - calculateDiscount(item))).toFixed(2)}</span>
                <span>Quantidade: 
                  <input 
                    type="number" 
                    min="1" 
                    value={item.quantity} 
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)} 
                  />
                </span>
                <button onClick={() => removeFromCart(item.id)}>Remover</button>
              </div>
            ))}
            <div className="cart-total">Total: R$ {total.toFixed(2)}</div>
            <div className="cart-savings">Economia: R$ {totalDiscount.toFixed(2)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
