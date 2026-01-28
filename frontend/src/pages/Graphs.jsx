import React, { useState, useEffect, useRef } from "react";
import "../css/Graphs.css";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
  Legend,
} from "chart.js";

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Filler, Legend);

function Graphs() {
  function NumberControl({ value, setValue, step = 1, min, max, ...props }) {
    const PREC = 100;
    const toNumber = (v) => {
      if (v === "" || v === null || typeof v === "undefined") return "";
      const n = Number(v);
      if (Number.isNaN(n)) return 0;
      return Number(Math.round(n * PREC) / PREC);
    };

    const formatDisplay = (n) => {
      if (n === "" || n === null || typeof n === "undefined") return "";
      return Number.isInteger(n) ? String(n) : n.toFixed(2);
    };


    const [inputStr, setInputStr] = useState(formatDisplay(value));
    const [editing, setEditing] = useState(false);

    useEffect(() => {
      if (!editing) setInputStr(formatDisplay(value));
    }, [value, editing]);

    const onChange = (e) => {
      setInputStr(e.target.value);
    };

    const commitInput = () => {
      const raw = (inputStr || "").trim();
      if (raw === "") {
        setValue("");
        setInputStr("");
        return;
      }

      const parsed = parseFloat(raw.replace(/,/g, '.'));
      if (Number.isNaN(parsed)) {
        setInputStr(formatDisplay(value));
        return;
      }
      const n = toNumber(parsed);
      setValue(n);
      setInputStr(formatDisplay(n));
    };

    const onBlur = () => {
      setEditing(false);
      commitInput();
    };

    const onFocus = () => {
      setEditing(true);
    };

    const inc = () => {
      const cur = toNumber(value === "" ? 0 : value);
      const next = Math.round((cur * PREC + step * PREC)) / PREC;
      const n = Number(next.toFixed(2));
      setValue(n);
      setInputStr(formatDisplay(n));
    };

    const dec = () => {
      const cur = toNumber(value === "" ? 0 : value);
      const next = Math.round((cur * PREC - step * PREC)) / PREC;
      const n = Number(next.toFixed(2));
      setValue(n);
      setInputStr(formatDisplay(n));
    };

    return (
      <div className="number-input">
        <button type="button" className="spin-btn" onClick={dec} aria-label="Decrement">
          −
        </button>
        <input
          type="text"
          value={inputStr}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          min={min}
          max={max}
          {...props}
        />
        <button type="button" className="spin-btn" onClick={inc} aria-label="Increment">
          +
        </button>
      </div>
    );
  }

  const [tauxBrut, setTauxBrut] = useState(5);
  const [regime, setRegime] = useState("normal");
  const [tauxNet, setTauxNet] = useState(null);

  const [montant, setMontant] = useState(1000);
  const [taux, setTaux] = useState(5);
  const [versement, setVersement] = useState(100);
  const [annees, setAnnees] = useState(10);
  const [devise, setDevise] = useState("EUR");

  // Taux supplémentaires
  const [extraRates, setExtraRates] = useState([1.75, 3, 5, 12]);

  const [result, setResult] = useState(null);
  const chartMainRef = useRef(null);
  const chartCompareRef = useRef(null);
  const chartMainInstance = useRef(null);
  const chartCompareInstance = useRef(null);

  const convertirTaux = () => {
    let net = 0;
    if (regime === "normal") net = tauxBrut * (1 - 0.3);
    else if (regime === "pea") net = tauxBrut * (1 - 0.172);
    setTauxNet(net.toFixed(2));
  };

  const formatMoney = (value, currencyCode) => {
    if (currencyCode === "none")
      return Number(value).toLocaleString("fr-FR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: currencyCode,
    }).format(value);
  };

  const computeSchedule = (principal, ratePercent, years, monthlyContribution) => {
    const r = Number(ratePercent) / 100;
    const schedule = [];
    let balance = principal;

    for (let y = 0; y <= years; y++) {
      if (y > 0) {
        for (let m = 1; m <= 12; m++) {
          balance += monthlyContribution;
          balance *= Math.pow(1 + r, 1 / 12);
        }
      }
      schedule.push(Number(balance.toFixed(2)));
    }
    return schedule;
  };

  const calculer = () => {
    const montantNum = parseFloat(montant) || 0;
    const tauxNum = parseFloat(taux) || 0;
    const versementNum = parseFloat(versement) || 0;
    const anneesNum = parseFloat(annees) || 0;

    const labels = Array.from({ length: anneesNum + 1 }, (_, i) => i + " an" + (i > 1 ? "s" : ""));

    // === Graphique principal ===
    const mainSchedule = computeSchedule(montantNum, tauxNum, anneesNum, versementNum);
    if (chartMainInstance.current) chartMainInstance.current.destroy();

    chartMainInstance.current = new Chart(chartMainRef.current, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: `Taux ${tauxNum}%`,
            data: mainSchedule,
            fill: true,
            tension: 0.25,
            borderColor: "#2563eb",
            backgroundColor: "rgba(37, 99, 235, 0.1)",
            pointRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } },
      },
    });

    // second graph
    const colors = ["#2563eb", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];
    const datasets = [];

    // principal line
    datasets.push({
      label: `Taux ${tauxNum}%`,
      data: mainSchedule,
      borderColor: colors[0],
      backgroundColor: colors[0] + "22",
      borderWidth: 2,
      tension: 0.25,
      fill: false,
    });

    // others lines
    extraRates.forEach((r, i) => {
      const schedule = computeSchedule(montantNum, r, anneesNum, versementNum);
      datasets.push({
        label: `Taux ${r}%`,
        data: schedule,
        borderColor: colors[i + 1],
        backgroundColor: colors[i + 1] + "22",
        borderWidth: 2,
        tension: 0.25,
        fill: false,
      });
    });

    if (chartCompareInstance.current) chartCompareInstance.current.destroy();

    chartCompareInstance.current = new Chart(chartCompareRef.current, {
      type: "line",
      data: { labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: { color: "#f1f5f9" },
          },
        },
        scales: { y: { beginAtZero: true } },
      },
    });

    const final = mainSchedule[mainSchedule.length - 1];
    const totalInvesti = montantNum + versementNum * 12 * anneesNum;
    const gain = final - totalInvesti;
    const gainPct = (gain / totalInvesti) * 100 || 0;

    setResult({
      final,
      totalInvesti,
      gain,
      gainPct,
    });
  };

  const reset = () => {
    setMontant(1000);
    setTaux(5);
    setVersement(100);
    setAnnees(10);
    setDevise("EUR");
    setExtraRates([1.75, 3, 5, 12]);
    setResult(null);
    if (chartMainInstance.current) chartMainInstance.current.destroy();
    if (chartCompareInstance.current) chartCompareInstance.current.destroy();
  };

  useEffect(() => {
    calculer();
  }, []);

  return (
    <div className="graphs-container">
      <header>
        <h1>Calculateur d'intérêts composés</h1>
        <p className="muted">Entrez le montant, le taux annuel, la durée et vos versements mensuels. 
          Il est issu de mon github mais je l'ai convertit en React et je me suis amusé avec le css pour le faire correspondre à mon thème.
        </p>
      </header>

      {/* Convertisseur taux brut/net */}
      <div className="card">
        <h2 className="h2-card">Convertisseur Taux Brut → Taux Net</h2>
        <div className="grid">
          <div>
            <label>Taux brut (%)</label>
            <NumberControl value={tauxBrut} setValue={setTauxBrut} step={1} />
          </div>
          <div>
            <label>Régime fiscal</label>
            <select value={regime} onChange={(e) => setRegime(e.target.value)}>
              <option value="normal">Normal (PFU 30%)</option>
              <option value="pea">PEA (17,2%)</option>
            </select>
          </div>
        </div>
        <button className="convert-btn" onClick={convertirTaux}>
          Convertir
        </button>
        {tauxNet && (
          <div className="result">
            <strong className="label-strong">Taux net :</strong> <span className="taux-valeur">{tauxNet}%</span>
            <br />
            <small className="muted">(À partir d’un taux brut de {tauxBrut}%)</small>
          </div>
        )}
      </div>

      {/* Calculateur */}
      <div className="card">
        <div className="grid">
          <div>
            <label>Montant initial</label>
            <NumberControl value={montant} setValue={setMontant} step={100} min={0} />
          </div>
          <div>
            <label>Taux annuel (%)</label>
            <NumberControl value={taux} setValue={setTaux} step={1} min={0} />
          </div>
          <div>
            <label>Versement mensuel</label>
            <NumberControl value={versement} setValue={setVersement} step={10} min={0} />
          </div>
          <div>
            <label>Nombre d’années</label>
            <NumberControl value={annees} setValue={setAnnees} step={1} min={0} />
          </div>
          <div>
            <label>Devise</label>
            <select value={devise} onChange={(e) => setDevise(e.target.value)}>
              <option value="EUR">EUR (€)</option>
              <option value="USD">USD ($)</option>
              <option value="GBP">GBP (£)</option>
              <option value="none">Sans symbole</option>
            </select>
          </div>
        </div>

        <div className="actions">
          <button onClick={calculer}>Calculer</button>
          <button className="reset" onClick={reset}>
            Réinitialiser
          </button>
        </div>

        {result && (
          <div className="result">
            <strong>Montant final après {annees} an{annees > 1 ? "s" : ""} :</strong>{" "}
            <span className="taux-valeur">{formatMoney(result.final, devise)}</span>
            <br />
            <strong>Total investi :</strong>{" "}
            <span className="taux-valeur">{formatMoney(result.totalInvesti, devise)}</span>
            <br />
            <strong>Gain net :</strong>{" "}
            <span className="taux-valeur">{formatMoney(result.gain, devise)}</span> (
            <span className="taux-valeur">{result.gainPct.toFixed(2)}%</span>)
          </div>
        )}

        {/* Graph principal */}
        <div className="chart-container">
          <canvas ref={chartMainRef}></canvas>
        </div>

        {/* Cases pour les taux comparatifs */}
        <div className="extra-rates">
          <div className="grid">
            {extraRates.map((val, i) => (
              <NumberControl
                key={i}
                value={val}
                setValue={(v) =>
                  setExtraRates((prev) => {
                    const arr = [...prev];
                    arr[i] = v;
                    return arr;
                  })
                }
                step={0.25}
                min={0}
              />
            ))}
          </div>
        </div>

        {/* 2e graphique comparatif */}
        <div className="chart-container second">
          <canvas ref={chartCompareRef}></canvas>
        </div>
      </div>
    </div>
  );
}

export default Graphs;
