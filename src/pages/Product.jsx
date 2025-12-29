import { useOutletContext, useParams } from "react-router-dom";
import { Services } from "../components/Services/Services";
import { servicesArray } from "../services";


export const Product = () => {
    const {products} = useOutletContext()

    const { id } = useParams();
    const findProduct = products.find((p) => p.id === +id);
  return (
   
        <section className="content">
          <div className="container">
            {findProduct ? (
              <div className="content-box">
                <div className="content-product">
                  <div className="content-product__left">
                    <h2 className="content-product__title">
                      {findProduct.title}
                    </h2>
                    <img
                      src={findProduct.img}
                      alt="product-img"
                      className="content-product__img"
                    />
                    <p className="content-product__text">
                      {findProduct.description}
                    </p>
                  </div>

                  <div className="content-product__right">
                    <h2 className="content-product__price">
                      {findProduct.price}
                    </h2>
                    <button className="btn btn-primary btn-large">
                      Показать телефон
                    </button>
                  </div>
                </div>
                <div className="content-side">
                  <h3 className="content-side__title">Сервисы и услуги</h3>

                  <div className="content-side__box">
                    <div className="content-side__list">
                      {servicesArray.map((services) => (
                        <Services
                          key={services.id}
                          title={services.title}
                          text={services.text}
                          img={services.img}
                        />
                      ))}
                    </div>

                    <div className="content-side__footer">
                      <p className="content-side__footer--item">
                        © ООО «Абито», 2011–2021
                      </p>
                      <a href="#!" className="content-side__footer--item">
                        Полaитика конфиденциальности
                      </a>
                      <a href="#!" className="content-side__footer--item">
                        Обработка данных
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <h2>Такого товара не существует!</h2>
            )}
          </div>
        </section>
  );
};
