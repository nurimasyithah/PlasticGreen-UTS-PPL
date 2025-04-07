 $(document).ready(function () {
     $('#qa-modal').MultiStep({

         data: [{
            content: `
            <h5 class="margin-30">Investment areas you are involved in?</h5>
            <div class="form-radio">
                <div class="form-radio-flex">
                    <input type="checkbox" name="status" id="hc" value="hc" />
                    <label for="hc">Health Care</label>
                            
                    <input type="checkbox" name="status" id="tech" value="tech" />
                    <label for="tech">Technology</label>
                            
                    <input type="checkbox" name="status" id="fin" value="fin" />
                    <label for="fin">Financials</label>

                    <input type="checkbox" name="status" id="nr" value="nr" />
                    <label for="nr">Resources</label>

                    <input type="checkbox" name="status" id="energy" value="energy" />
                    <label for="energy">Energy</label>

                    <input type="checkbox" name="status" id="industry" value="industry" />
                    <label for="industry">Industrials</label>

                    <input type="checkbox" name="status" id="re" value="re" />
                    <label for="re">Real Estate</label>

                    <input type="checkbox" name="status" id="metals" value="metals" />
                    <label for="metals">Metals</label>

                </div>
            </div>`,
            skip: true,
            label: 'Start'
         },{
            content: `
            <h5 class="margin-30">Investment(s) you currently own?</h5>
     
            <div class="form-radio">
                <div class="form-radio-flex">
                    <input type="checkbox" name="status" id="property" value="property" checked="checked" />
                    <label for="property">Property</label>
                            
                    <input type="checkbox" name="status" id="fi" value="fi" />
                    <label for="fi">Fixed Assets</label>
                            
                    <input type="checkbox" name="status" id="stocks" value="stocks" />
                    <label for="stocks">Stocks</label>

                    <input type="checkbox" name="status" id="commodities" value="commodities" />
                    <label for="commodities">Commodities</label>
                </div>
            </div>`,
            skip: true
        },{
            content: `<h5 class="margin-30">Have you ever diversified your portfolio?</h5>
            <div class="form-radio">
                 <div class="form-radio-flex">
                     <input type="radio" name="diversify" id="yes" value="yes" checked="checked" />
                     <label for="yes">Yes</label>
                             
                     <input type="radio" name="diversify" id="no" value="no" />
                     <label for="no">No</label>
                 </div>
             </div>`,
            skip: true
        },{
             content: `
             <h5 class="margin-30">Investment Amount?</h5>
     
             <div class="form-radio">
                 <div class="form-radio-flex">
                     <input type="radio" name="amount" id="tentohun" value="tentohun" checked="checked" />
                     <label for="tentohun">£10k-£100k</label>
                             
                     <input type="radio" name="amount" id="huntofivehun" value="huntofivehun" />
                     <label for="huntofivehun">£100k-£500k</label>
                             
                     <input type="radio" name="amount" id="fivehuntomil" value="fivehuntomil" />
                     <label for="fivehuntomil">£500k-£1m+</label>
                 </div>
             </div>
             `
         }],
         final: 'Are you sure that you want to confirm?',
         modalSize: 'lg'
     });

     $('#nda-modal').MultiStep({

        data: [{
           content: `
           <h5 class="margin-30">Sign the NDA for Information Memorandum</h5>
           <div class="nda-form">
           </div>`,
           label: 'Start'
        }],
        final: 'Are you sure that you want to confirm?',
        modalSize: 'lg'
    });

 });