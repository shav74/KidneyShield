import React from "react"
import white_arrow from "../../assets/white-arrow.png"
import md5 from "crypto-js/md5"
import "./Donate.css"

const Donate = () => {
  const merchantSecret = "MzU1NzYzNjgxMjE4NjcyOTcxNjY1OTcwMzc0MDk0MjYxOTc4NzAy"
  const merchantId = "1226695"
  const currency = "LKR"
  const orderId = Math.floor(Math.random() * 1000000)
  const hashedSecret = md5(merchantSecret).toString().toUpperCase()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const amount = formData.get("amount")
    const amountFormated = parseFloat(amount)
      .toLocaleString("en-us", { minimumFractionDigits: 2 })
      .replaceAll(",", "")
    const hash = md5(
      merchantId + orderId + amountFormated + currency + hashedSecret
    )
      .toString()
      .toUpperCase()
    const hashInput = e.target.elements.hash
    hashInput.value = hash
    e.target.submit()
  }

  return (
    <>
      <div className="donate-form">
        <div className="donate-col">
          <form
            onSubmit={handleSubmit}
            action="https://sandbox.payhere.lk/pay/checkout"
            method="post"
          >
            <input type="hidden" name="merchant_id" value={merchantId} />
            <input type="hidden" name="return_url" value="/" />
            <input type="hidden" name="cancel_url" value="/" />
            <input
              type="hidden"
              name="notify_url"
              value="https://www.iwmi.cgiar.org/blogs"
            />
            <br />
            <label htmlFor="">Amount</label>
            <input type="hidden" name="order_id" value={orderId} />
            <input type="hidden" name="items" value="Donations" />
            <input type="hidden" name="currency" value={currency} hidden />
            <input type="number" name="amount" placeholder="LKR" />
            <br />
            Customer Details
            <br />
            <input type="text" name="first_name" placeholder="First Name" />
            <input type="text" name="last_name" placeholder="Last name" />
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="phone" placeholder="Phone No" />
            <input type="text" name="address" placeholder="Address" />
            <input type="text" name="city" placeholder="City" />
            <input type="text" name="country" placeholder="Country" />
            <input type="hidden" name="hash" />
            <button type="submit" className="btn dark-btn">
              Donate <img src={white_arrow} alt="small arrow button" />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Donate
