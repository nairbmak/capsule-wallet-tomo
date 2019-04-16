import React, { Component } from 'react';

// Setup CSS Module
import classNames from 'classnames/bind';
import style from 'Style/index.scss';
var cx = classNames.bind(style);


class Header extends Component {
  constructor(props) {
    super(props);
  }

  getNetName = function (chainId) {
    if (!chainId) return null;
    chainId = chainId.toString();
    var network = null;
    switch (chainId.toLowerCase()) {
      case '88':
        network = 'mainnet';
        break;
      case 'mainnet':
        network = 'mainnet';
        break;
      case '89':
        network = 'testnet';
        break;
      case 'testnet':
        network = 'testnet';
        break;
      default:
        network = 'testnet';
    }
    return network;
  }

  net() {
    let net = this.getNetName(window.capsuleWalletTomo.net);
    let Net = net.charAt(0).toUpperCase() + net.slice(1)
    return (
      <div className={cx("box-line", net)}>
        <i className={cx("tomo")} />
        <p className={cx("my-auto")}>{Net}</p>
      </div>
    )
  }

  render() {
    return (
      <div className={cx("row", "wallet-header")}>
        <div className={cx("container", "h-100")}>
          <div className={cx("h-100", "d-flex", "flex-column")}>
            <div className={cx("row")}>
              <h1 className={cx("font-weight-bold", "secondary")}>CAPSULE WALLET TOMO.</h1>
            </div>
            <div className={cx("row")}>
              <h2 className={cx("secondary")}>Capsule wallet tomo will power your Dapps with multi-wallets interaction.</h2>
            </div>
            <div className={cx("row", "flex-grow-1", "justify-content-end", "align-items-end")}>
              {this.net()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;