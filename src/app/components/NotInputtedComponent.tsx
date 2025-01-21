export default function NotInputtedComponent() {
  return (
    <div className="grid grid-cols-2 mb-28">
      <div className="p-1">
        <p className="font-bold">APPROVAL CONDITIONS</p>
        <div className="ml-2">
          <p>2 Nearest relatives w/ address & landline</p>
          <p>3 Personal Reference / address & landline</p>
          <p>For Private Use Only</p>
          <p>PDC/BPI e-ADA enrolled</p>
          <p>Spouse to sign as Co-Maker</p>
        </div>
      </div>
      <div className="p-1">
        <p className="font-bold ml-4">STANDARD DOCUMENTARY REQUIREMENTS</p>
        <div className="space-y-4">
          <div>
            <span className="font-bold">A. INDIVIDUAL</span>
            <ul className="list-disc ml-8">
              <li>
                Completely Filled-Up and Signed Credit Application (CFUSCA)
              </li>
              <li>At least two (2) valid government-issued IDs</li>
              <li>Three (3) original specimen signature</li>
              <li>Insurance Policy and OR of payment</li>
              <li>
                Promissory Note and Chattel Mortgage (for Retail Account) - 8
                sets
              </li>
              <li>Lease Contract (Lease Financing) - 6 sets</li>
              <li>Vehicle Sales Invoice and Delivery Receipt</li>
              <li>LTO Stencil (Blue Form) - 3 original copies</li>
            </ul>
          </div>
          <div>
            <span className="font-bold">
              B. ADDITIONAL REQUIREMENTS (IF CORPORATE ACCOUNT)
            </span>
            <ul className="list-disc ml-8">
              <li>SEC Registration</li>
              <li>Articles of Inc. and By-Laws</li>
              <li>Board Resolution / Secretary's Certificate</li>
              <li>Generatl Information Sheet (latest)</li>
              <li>Audited Financial Statement (latest)</li>
            </ul>
          </div>
          <div>
            <span className="font-bold">C. OTHER REQUIREMENTS</span>
            <ul className="list-disc ml-8">
              <li>
                Latest 3 months payslip / Certificate of Tax Filing / Reg.
                (except for OFWs and other tax-exempt individuals)
              </li>
              <li>LTO Insurance Policy for Public Use</li>
              <li>Mode of Payment (completely filled-up and signed)</li>
              <ul className="list-none">
                <li>a. Post Dated Checks (at least 24 pieces)</li>
                <li>b. Autodebit (ADA) Form</li>
                <li>c. OTC Undertaking</li>
              </ul>
              <li>Proof of Foreign Identification - (For Foreign National)</li>
              <li>Affidavit / SPA (if applicable)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
