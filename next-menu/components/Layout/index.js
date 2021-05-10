import Header from '../Header';


function Layout({produtos}){
    return(
        <div>
            <Header/>

            

            <div className="grid grid-cols-1 md:grid-cols-4 mx-10">


                {produtos.map(produto =>(
                <div className="w-52">
                
                    <div>
                        <h2 className="text-lg font-semibold">{produto.titulo}</h2>
                        <p className="text-sm text-gray-700">{produto.descricacao}</p>
                    </div>

                    <div className="shadow-lx mt-4">
                        <div className="shadow-lg">
                            <a href="#">
                            <div>
                            <img className="" src={produto.imagen1}></img>
                            </div>
                            <div className="px-4 py-2">
                            <h3 className="text-sm font-semibold">{produto.titulo}</h3>
                            <p className="mt-2 text-sm text-gray-800">{produto.descricacao}</p>
                            <p className="mt-2 text-sm text-gray-800">R${produto.preco}</p>
                            </div>
                            </a>
                        </div>
                    </div>
                
                </div>
                ))}





            </div>
        
        </div>
    );
};

export default Layout;