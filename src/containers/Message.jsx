import React, { Component } from 'react';
import MessageList from '../components/MessageList';

const dataPromo = [
  {
    title: "Gratis Es campur di kedai Sonja",
    url: "https://res.cloudinary.com/mtrimg/image/upload/v1538717249/myboost/j3qpeetqi1zb3hizpfkf.jpg",
    content: "Type Cocok banget nih untuk ngelengkapin makan siang kamu. Dapatkan Es Campur Kedai Sonja gratis di setiap pembelian varian Gurame dengan BoostCash! Bakalan buat makan siang kamu lebih meriah. #ngeBOOSTbentar @kedaisonjaAyo segera download aplikasi BoostPlay dan ajak teman kamu untuk mendownload aplikasi BoostPlay di http://bit.ly/BoostPlay-Keren yaaa! Karena #ngeBOOSTbentar rame-rame lebih seru..Something"
  },
  {
    title: "Dapetin tambahan 1 Burung Puyuh Original atau Burung Puyuh Rempah",
    url: "https://res.cloudinary.com/mtrimg/image/upload/v1539142840/myboost/thuljzzf9312gi4ol16t.jpg",
    content: "Type Cocok banget nih untuk ngelengkapin makan siang kamu. Dapatkan Es Campur Kedai Sonja gratis di setiap pembelian varian Gurame dengan BoostCash! Bakalan buat makan siang kamu lebih meriah. #ngeBOOSTbentar @kedaisonjaAyo segera download aplikasi BoostPlay dan ajak teman kamu untuk mendownload aplikasi BoostPlay di http://bit.ly/BoostPlay-Keren yaaa! Karena #ngeBOOSTbentar rame-rame lebih seru..Something"
  },
  {
    title: "Gratis Bagelen atau Soes dengan transaksi minimum 75.000",
    url: "https://res.cloudinary.com/mtrimg/image/upload/v1538567902/myboost/izccri8ks46w8rbk4igb.jpg",
    content: "Type Cocok banget nih untuk ngelengkapin makan siang kamu. Dapatkan Es Campur Kedai Sonja gratis di setiap pembelian varian Gurame dengan BoostCash! Bakalan buat makan siang kamu lebih meriah. #ngeBOOSTbentar @kedaisonjaAyo segera download aplikasi BoostPlay dan ajak teman kamu untuk mendownload aplikasi BoostPlay di http://bit.ly/BoostPlay-Keren yaaa! Karena #ngeBOOSTbentar rame-rame lebih seru..Something"
  },
  {
    title: "Gratis Es Coklat Susu di KONG DJIE Coffee Kelapa Gading",
    url: "https://res.cloudinary.com/mtrimg/image/upload/v1538454054/myboost/ovw8zkac6xs4tpgwrqaq.jpg",
    content: "Type Cocok banget nih untuk ngelengkapin makan siang kamu. Dapatkan Es Campur Kedai Sonja gratis di setiap pembelian varian Gurame dengan BoostCash! Bakalan buat makan siang kamu lebih meriah. #ngeBOOSTbentar @kedaisonjaAyo segera download aplikasi BoostPlay dan ajak teman kamu untuk mendownload aplikasi BoostPlay di http://bit.ly/BoostPlay-Keren yaaa! Karena #ngeBOOSTbentar rame-rame lebih seru..Something"
  },
  {
    title: "Diskon di Negiya Express Grand Indonesia",
    url: "https://res.cloudinary.com/mtrimg/image/upload/v1538452854/myboost/izdjqggrfpgluf2wgrxu.jpg",
    content: "Type Cocok banget nih untuk ngelengkapin makan siang kamu. Dapatkan Es Campur Kedai Sonja gratis di setiap pembelian varian Gurame dengan BoostCash! Bakalan buat makan siang kamu lebih meriah. #ngeBOOSTbentar @kedaisonjaAyo segera download aplikasi BoostPlay dan ajak teman kamu untuk mendownload aplikasi BoostPlay di http://bit.ly/BoostPlay-Keren yaaa! Karena #ngeBOOSTbentar rame-rame lebih seru..Something"
  },
  {
    title: "Promo Special di Starmax Nusantara menggunakan BoostCash",
    url: "https://res.cloudinary.com/mtrimg/image/upload/v1538386551/myboost/idtcz19bn2mlogwtk6l7.jpg",
    content: "Type Cocok banget nih untuk ngelengkapin makan siang kamu. Dapatkan Es Campur Kedai Sonja gratis di setiap pembelian varian Gurame dengan BoostCash! Bakalan buat makan siang kamu lebih meriah. #ngeBOOSTbentar @kedaisonjaAyo segera download aplikasi BoostPlay dan ajak teman kamu untuk mendownload aplikasi BoostPlay di http://bit.ly/BoostPlay-Keren yaaa! Karena #ngeBOOSTbentar rame-rame lebih seru..Something"
  }
]

export default class Message extends Component {
  render () {
    return (
      <div className="container" style={{marginTop: 20}}>
        <div className="row">
          <MessageList
            dataPromo={dataPromo}
          />
        </div>
      </div>
    )
  }
}