export default function InvoiceForPrint() {
  return (
    <div className="flex">
      <div className="max-w-5xl mx-auto p-6 text-sm font-sans space-y-6 text-black min-h-screen flex flex-col">
        <div className="flex flex-row gap-2 py-8">
          <div className="flex justify-center items-center text-3xl w-1/2">
            <p>Logo</p>
          </div>
          <div className="text-right w-1/2">
            <ul className="flex flex-col">
              <li>
                <strong>Sprzedawca:</strong>
              </li>
              <li>
                <input type="text" /> Dane sprzedającego:
              </li>
              <li>Ulica sprzedającego:</li>
              <li>Kod pocztowy i miasto sprzedającego:</li>
              <li>NIP sprzeadającego:</li>
            </ul>
          </div>
        </div>
        {/* Header */}
        <div className="flex justify-between items-center border-y-2 border-y-black py-4">
          <div className="text-4xl">Faktura VAT</div>
          <div className="text-right text-sm space-y-1">
            <div>
              <strong>Numer dokumentu: FS/0/00/0000</strong>
            </div>
            <div>Data wystawienia: 0000-00-00</div>
            <div>Data dostawy / wykonania usługi: 0000-00-00</div>
          </div>
        </div>

        {/* Buyer Info */}
        <div className="py-4 space-y-1">
          <p className="font-semibold">Nabywca:</p>
          <p>Dane nabywcy</p>
          <p>Ulica nabywcy</p>
          <p>Kod pocztowy i miasto nabywcy</p>
          <p>NIP nabywcy</p>
        </div>

        {/* Items Table */}
        <table className="w-full text-sm border-t-2  border-black">
          <thead className="border-b-2 border-y font-semibold">
            <tr>
              <th className="text-left p-2">Lp.</th>
              <th className="text-left p-2">Nazwa towaru / usługi</th>
              <th className="text-left p-2">Kod CN / PKWiU</th>
              <th className="text-center p-2">Ilość</th>
              <th className="text-center p-2">j.m.</th>
              <th className="text-right p-2">Cena netto</th>
              <th className="text-center p-2">VAT</th>
              <th className="text-right p-2">Wartość netto</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-black">
              <td className="p-2">1</td>
              <td className="p-2">Nazwa towaru / usługi</td>
              <td className="p-2"></td>
              <td className="p-2 text-center">1</td>
              <td className="p-2 text-center">szt</td>
              <td className="p-2 text-right">2 700,00</td>
              <td className="p-2 text-center">23%</td>
              <td className="p-2 text-right">2 700,00</td>
            </tr>
          </tbody>
        </table>

        <div className="py-5 space-y-4 grow">
          <table className="w-full text-sm">
            <thead>
              <tr className="font-semibold">
                <th className="text-left p-1 border-b-2 border-black">
                  Forma płatności
                </th>
                <th className="text-right p-1 border-b-2 border-black">
                  Termin płatności
                </th>
                <th className="text-right p-1 border-b-2 border-black">
                  Kwota do zapłaty
                </th>
                <th className="text-left p-1 "></th>
                <th className="text-left p-1 border-b-2 border-black"></th>
                <th className="text-left p-1 border-b-2 border-black">VAT</th>
                <th className="p-1 border-b-2 border-black text-right">
                  Wartość netto
                </th>
                <th className="p-1 border-b-2 border-black text-right">
                  Kwota VAT
                </th>
                <th className="p-1 border-b-2 border-black text-right">
                  Wartość brutto
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-1">BLIK</td>
                <td className="p-1 text-right">0000-00-00</td>
                <td className="p-1 text-right">3 321,00 PLN</td>
                <td className="p-1"></td>
                <td className="p-1">W tym:</td>
                <td className="p-1">23%</td>
                <td className="p-1 text-right">2 700,00</td>
                <td className="p-1 text-right">621,00</td>
                <td className="p-1 text-right">3 321,00 PLN</td>
              </tr>
              <tr className="font-semibold">
                <td colSpan={3}></td>
                <td className="p-1"></td>
                <td className="p-1">Suma:</td>
                <td className="p-1"></td>
                <td className="p-1 text-right">2 700,00</td>
                <td className="p-1 text-right">621,00</td>
                <td className="p-1 text-right">3 321,00 PLN</td>
              </tr>
            </tbody>
          </table>
          {/* Payment + Totals */}
          <div className="flex justify-between items-end pt-4 border-b-2 border-b-black">
            <div className="text-sm py-1">Zapłacono: 3 321,00 PLN</div>
            <div className="text-right">
              <div className="text-3xl font-normal">
                Razem do zapłaty: 3 321,00 PLN
              </div>
              <div className="text-sm py-1">Pozostaje do zapłaty: 0,00 PLN</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <p>
            Wygenereowane przez platformę <span className="text-lg">LOGO</span>
          </p>
          <p>Strona 1/1</p>
        </div>
      </div>
    </div>
  );
}
