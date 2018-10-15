import React, { Component, Fragment } from "react";

const dataPromo = [
  {
    title: "Gratis Es campur di kedai Sonja",
    url:
      "https://res.cloudinary.com/mtrimg/image/upload/v1538717249/myboost/j3qpeetqi1zb3hizpfkf.jpg",
    content:
      "Type Cocok banget nih untuk ngelengkapin makan siang kamu. Dapatkan Es Campur Kedai Sonja gratis di setiap pembelian varian Gurame dengan BoostCash! Bakalan buat makan siang kamu lebih meriah. #ngeBOOSTbentar @kedaisonjaAyo segera download aplikasi BoostPlay dan ajak teman kamu untuk mendownload aplikasi BoostPlay di http://bit.ly/BoostPlay-Keren yaaa! Karena #ngeBOOSTbentar rame-rame lebih seru..Something"
  },
  {
    title: "Dapetin tambahan 1 Burung Puyuh Original atau Burung Puyuh Rempah",
    url:
      "https://res.cloudinary.com/mtrimg/image/upload/v1539142840/myboost/thuljzzf9312gi4ol16t.jpg",
    content:
      "Type Cocok banget nih untuk ngelengkapin makan siang kamu. Dapatkan Es Campur Kedai Sonja gratis di setiap pembelian varian Gurame dengan BoostCash! Bakalan buat makan siang kamu lebih meriah. #ngeBOOSTbentar @kedaisonjaAyo segera download aplikasi BoostPlay dan ajak teman kamu untuk mendownload aplikasi BoostPlay di http://bit.ly/BoostPlay-Keren yaaa! Karena #ngeBOOSTbentar rame-rame lebih seru..Something"
  },
  {
    title: "Gratis Bagelen atau Soes dengan transaksi minimum 75.000",
    url:
      "https://res.cloudinary.com/mtrimg/image/upload/v1538567902/myboost/izccri8ks46w8rbk4igb.jpg",
    content:
      "Type Cocok banget nih untuk ngelengkapin makan siang kamu. Dapatkan Es Campur Kedai Sonja gratis di setiap pembelian varian Gurame dengan BoostCash! Bakalan buat makan siang kamu lebih meriah. #ngeBOOSTbentar @kedaisonjaAyo segera download aplikasi BoostPlay dan ajak teman kamu untuk mendownload aplikasi BoostPlay di http://bit.ly/BoostPlay-Keren yaaa! Karena #ngeBOOSTbentar rame-rame lebih seru..Something"
  },
  {
    title: "Gratis Es Coklat Susu di KONG DJIE Coffee Kelapa Gading",
    url:
      "https://res.cloudinary.com/mtrimg/image/upload/v1538454054/myboost/ovw8zkac6xs4tpgwrqaq.jpg",
    content:
      "Type Cocok banget nih untuk ngelengkapin makan siang kamu. Dapatkan Es Campur Kedai Sonja gratis di setiap pembelian varian Gurame dengan BoostCash! Bakalan buat makan siang kamu lebih meriah. #ngeBOOSTbentar @kedaisonjaAyo segera download aplikasi BoostPlay dan ajak teman kamu untuk mendownload aplikasi BoostPlay di http://bit.ly/BoostPlay-Keren yaaa! Karena #ngeBOOSTbentar rame-rame lebih seru..Something"
  },
  {
    title: "Diskon di Negiya Express Grand Indonesia",
    url:
      "https://res.cloudinary.com/mtrimg/image/upload/v1538452854/myboost/izdjqggrfpgluf2wgrxu.jpg",
    content:
      "Type Cocok banget nih untuk ngelengkapin makan siang kamu. Dapatkan Es Campur Kedai Sonja gratis di setiap pembelian varian Gurame dengan BoostCash! Bakalan buat makan siang kamu lebih meriah. #ngeBOOSTbentar @kedaisonjaAyo segera download aplikasi BoostPlay dan ajak teman kamu untuk mendownload aplikasi BoostPlay di http://bit.ly/BoostPlay-Keren yaaa! Karena #ngeBOOSTbentar rame-rame lebih seru..Something"
  },
  {
    title: "Promo Special di Starmax Nusantara menggunakan BoostCash",
    url:
      "https://res.cloudinary.com/mtrimg/image/upload/v1538386551/myboost/idtcz19bn2mlogwtk6l7.jpg",
    content:
      "Type Cocok banget nih untuk ngelengkapin makan siang kamu. Dapatkan Es Campur Kedai Sonja gratis di setiap pembelian varian Gurame dengan BoostCash! Bakalan buat makan siang kamu lebih meriah. #ngeBOOSTbentar @kedaisonjaAyo segera download aplikasi BoostPlay dan ajak teman kamu untuk mendownload aplikasi BoostPlay di http://bit.ly/BoostPlay-Keren yaaa! Karena #ngeBOOSTbentar rame-rame lebih seru..Something"
  }
];

export default class MessageDetails extends Component {
  state = {
    titlePromo: ""
  };

  titleFormat(title) {
    return title.toLowerCase().split(' ').join('-')
  }

  componentDidMount() {
    const { title } = this.props.match.params;
    this.setState({ titlePromo: title });
    console.log("title from this.props.match.params ===> ", title);
  }

  render() {
    const { titlePromo } = this.state;
    return (
      <Fragment>
        {dataPromo.map((data, index) => {
          if (this.titleFormat(data.title) === titlePromo) {
            return (
              <div className="container" key={index} style={{marginTop: 30}}>
                <div className="row">
                  <div className="offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                    <div style={{alignContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                      <img
                        src={data.url}
                        alt="img-promo"
                        className="card-img-top"
                      />
                    </div>
                    <h5>{data.title}</h5>
                    <p>{data.content}</p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </Fragment>
    );
  }
}
