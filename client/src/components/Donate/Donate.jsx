import React from "react"
import white_arrow from "../../assets/white-arrow.png"
import md5 from "crypto-js/md5"

const Donate = () => {
  let merchantSecret =
    "MTM5NjcxMDMyMjIyNDMwNDU0NTkyNjU2Njg0NTU0MzYxODU1MzIyOA=="
  let merchantId = "1224888"
  //generate random order id
  let orderId = 2
  let amount = 1000
  let hashedSecret = md5(merchantSecret).toString().toUpperCase()
  let amountFormated = parseFloat(amount)
    .toLocaleString("en-us", { minimumFractionDigits: 2 })
    .replaceAll(",", "")
  let currency = "LKR"
  let hash = md5(
    merchantId + orderId + amountFormated + currency + hashedSecret
  )
    .toString()
    .toUpperCase()

  return (
    <>
      <div
        className="contact"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="contact-col"
          style={{
            border: "1px solid #212ea0",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <form action="https://sandbox.payhere.lk/pay/checkout" method="post">
            <input type="hidden" name="merchant_id" value={merchantId} />
            <input type="hidden" name="return_url" value="/help" />
            <input type="hidden" name="cancel_url" value="/" />
            <input
              type="hidden"
              name="notify_url"
              value="https://f3dc-112-134-135-50.ngrok-free.app/"
            />
            <br />
            <label htmlFor="">Amount</label>
            <input type="hidden" name="order_id" value={orderId} />
            <input type="hidden" name="items" value="Donations" />
            <input type="hidden" name="currency" value={currency} hidden />
            <input type="number" name="amount" placeholder="LKR" />
            <br />
            Customer Details <br />
            <input type="text" name="first_name" placeholder="First Name" />
            <input type="text" name="last_name" placeholder="Last name" />
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="phone" placeholder="Phone No" />
            <input type="text" name="address" placeholder="Address" />
            <input type="text" name="city" placeholder="City" />
            <input type="text" name="country" placeholder="Country" />
            <input type="hidden" name="hash" value={hash} />
            <button type="submit" className="btn dark-btn">
              Donate
              <img src={white_arrow} alt="small arrow button" />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Donate
