import React from 'react'

export default function Home() {
  return (
    <div className="payment-container">
      <div className="col-sm-12 col-md-12">
        <div>
          <h1>Payment Service</h1>
        </div>
        <form acceptCharset="UTF-8" action="/" className="require-validation" data-cc-on-file="false" data-stripe-publishable-key="pk_bQQaTxnaZlzv4FnnuZ28LFHccVSaj" id="payment-form" method="post">
          <div>
            <input name="utf8" type="hidden" value="✓" /><input name="_method" type="hidden" value="PUT" />
            <input name="authenticity_token" type="hidden" value="qLZ9cScer7ZxqulsUWazw4x3cSEzv899SP/7ThPCOV8=" />
          </div>
          <br />
          <div className='form-row'>
            <div className='form-group required'>
              <div className='error form-group hide'>
                <div className='alert-danger alert'>
                  Please correct the errors and try again.
              </div>
              </div>
              <label className='control-label'>Name on Card</label>
              <input className='form-control' size='4' type='text' />
            </div>

          </div>
          <div className='form-row'>
            <div className='form-group card required'>
              <label className='control-label'>Card Number</label>
              <input autoComplete='off' className='form-control card-number' size='20' type='text' />
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group card required'>
              <label className='control-label'>Billing Address</label>
              <input autoComplete='off' className='form-control' size='20' type='text' />
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group cvc required'>
              <label className='control-label'>CVC</label>
              <input autoComplete='off' className='form-control card-cvc' placeholder='ex. 311' size='4' type='text' />
            </div>

            <div className="row">
              <div className="col-sm-12"><label className='control-label'>Expiration</label></div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className='form-group expiration required'>
                  {/* <label className='control-label'>Expiration</label> */}
                  <input className='form-control card-expiry-month' placeholder='MM' size='2' type='text' style={{ 'width': '50%', 'display': 'inline' }} />
                  <input className='form-control card-expiry-year' placeholder='YYYY' size='4' type='text' style={{ 'width': '50%', 'display': 'inline' }} />
                </div>
              </div>
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group'>
              <label className='control-label'></label>
              <button className='form-control btn btn-primary' type='submit'> Continue →</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
