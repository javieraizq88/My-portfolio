import React from "react"
import "./form1.css"


const Form1 = props => {
    return (
        <>
            <div id="container-form1">
                <div className="container">
                    <div class="row">
                        <div class="col">
                            <form id="form"> 

                                <div class="card">
                                    <h1 class="ml-3">Form 1</h1>
                                    <div class="card-header">
                                        <h3>Payment form example</h3>
                                    </div>

                                    <div class="card-body">
                                        <div class="form-row">
                                            <div class="form-group col-md-5">
                                                <label for="Card">Card #</label>
                                                <input type="password" class="form-control" id="" placeholder="XXXXXX" />
                                            </div>
                                            <div class="form-group col-md-3">
                                                <label for="CVC">CVC #</label>
                                                <input type="number" class="form-control" id="" placeholder="0000000" />
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="Amount">Amount</label>
                                                <input type="number" class="form-control" id="" placeholder="Amount" />
                                            </div>
                                        </div>

                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="First-name">First name</label>
                                                <input type="text" class="form-control" id="" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="Last-name">Last name</label>
                                                <input type="text" class="form-control" id="" />
                                            </div>
                                        </div>

                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="City">City</label>
                                                <input type="text" class="form-control" id="" />
                                            </div>
                                            <div class="form-group col-md-3">
                                                <label for="inputState">State</label>
                                                <select id="inputState" class="form-control">
                                                    <option selected>Pick a State...</option>
                                                    <option>New York</option>
                                                    <option>Oregon</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-3">
                                                <label for="Postal-code">Postal code</label>
                                                <input type="number" class="form-control" id="" />
                                            </div>
                                        </div>

                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="We-accept" class="form-label">We accept:</label>
                                                <div class="form-group">
                                                    <input type="radio" name="" id="" /> <i class="fab fa-cc-visa"></i>
                                                    <input type="radio" name="" id="" /> <i class="fab fa-cc-paypal"></i>
                                                    <input type="radio" name="" id="" /> <i class="fab fa-cc-mastercard"></i>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="Messege">Messege</label>
                                                <textarea name="" id="" cols="" rows="4" class="form-control"></textarea>
                                                <small id="passwordHelpBlock" class="form-text text-muted">
                                                    Add any notes here.
                                    </small>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="card-footer">
                                        <div class="form-row justify-content-end">
                                            <button type="button" class="btn btn-secondary m-1 p-2">Cancel</button>
                                            <button type="button" id="console" class="btn btn-primary m-1 p-2">Send</button>
                                        </div>
                                    </div>
                                </div>


                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Form1