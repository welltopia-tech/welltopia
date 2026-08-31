/* =========================================================================
   Co-Creation Wheel｜共創力診断  (WELLTOPIA)
   Interactive prototype - vanilla JS SPA
   ========================================================================= */

(function () {
  "use strict";

  /* ----------------------------------------------------------------------
   * 1. DATA
   * ------------------------------------------------------------------- */

  var CATEGORIES = [
    {
      id: "purpose", en: "PURPOSE", jp: "目的",
      color: "#2B4FD1",
      cardDesc: "共創によって、何を実現するのかが定義されているか。",
      completeTitle: "PURPOSE COMPLETE",
      completeBody: "共創の目的に関する回答が完了しました。",
      completeNote: "共創の起点は、関係者が目指す未来を共有することから始まります。",
      keyword: "目的設定",
      strengthBody: "共創で実現したい未来やゴールを明確に描けています。",
      growthBody: "共創で実現したい未来を、より明確に言語化する余地があります。"
    },
    {
      id: "organization", en: "ORGANIZATION", jp: "組織",
      color: "#3157D5",
      cardDesc: "部署や役職を越えて、対話と意思決定が行われているか。",
      completeTitle: "ORGANIZATION COMPLETE",
      completeBody: "組織の共創力に関する回答が完了しました。",
      completeNote: "共創は、部署や役職の壁を越えた対話から生まれます。",
      keyword: "組織連携",
      strengthBody: "部署や役職を越えた対話・意思決定の土台があります。",
      growthBody: "部署や役職を越えた対話・意思決定の仕組みに、成長の余地があります。"
    },
    {
      id: "customer", en: "CUSTOMER", jp: "顧客",
      color: "#3F72DA",
      cardDesc: "顧客の行動だけでなく、感情や期待を理解しているか。",
      completeTitle: "CUSTOMER COMPLETE",
      completeBody: "顧客理解に関する回答が完了しました。",
      completeNote: "顧客への理解は、共創が向かうべき方向を示す羅針盤です。",
      keyword: "顧客理解",
      strengthBody: "顧客の期待や感情を捉え、共創の方向性を示せています。",
      growthBody: "顧客の期待や感情への理解を、さらに深める余地があります。"
    },
    {
      id: "value", en: "VALUE", jp: "価値",
      color: "#4C8CDD",
      cardDesc: "自社だけでは生み出せない体験価値が設計されているか。",
      completeTitle: "VALUE COMPLETE",
      completeBody: "価値設計に関する回答が完了しました。",
      completeNote: "自社単独では生み出せない価値こそが、共創の意味を決めます。",
      keyword: "価値設計",
      strengthBody: "自社単独では生み出せない体験価値の設計ができています。",
      growthBody: "自社単独では生み出せない体験価値の設計に、成長の余地があります。"
    },
    {
      id: "partner", en: "PARTNER", jp: "共創関係",
      color: "#55BFD9",
      cardDesc: "必要な専門性やパートナーと継続的な関係を築けているか。",
      completeTitle: "PARTNER COMPLETE",
      completeBody: "共創関係に関する回答が完了しました。",
      completeNote: "継続的な関係こそが、共創を一過性の企画から事業へ変えます。",
      keyword: "パートナーシップ",
      strengthBody: "社外の専門性・パートナーとの継続的な関係が強みです。",
      growthBody: "社外の専門性・パートナーとの継続的な関係構築に、成長の余地があります。"
    },
    {
      id: "design", en: "DESIGN", jp: "設計",
      color: "#5EA6DA",
      cardDesc: "共創を成果へつなげるプロセスや役割が設計されているか。",
      completeTitle: "DESIGN COMPLETE",
      completeBody: "共創の設計に関する回答が完了しました。",
      completeNote: "対話を成果につなげるには、プロセスと役割の設計が欠かせません。",
      keyword: "プロセス設計",
      strengthBody: "共創を成果につなげるプロセス設計が機能しています。",
      growthBody: "共創を成果へつなげるプロセスや役割の設計に、成長の余地があります。"
    },
    {
      id: "action", en: "ACTION", jp: "実行",
      color: "#6B8FE0",
      cardDesc: "アイデアを検証し、実装まで進める力があるか。",
      completeTitle: "ACTION COMPLETE",
      completeBody: "実行力に関する回答が完了しました。",
      completeNote: "共創の価値は、試し、実装し、進めることで初めて形になります。",
      keyword: "実行力",
      strengthBody: "アイデアを検証し、実装まで進める力があります。",
      growthBody: "アイデアを検証し、実装まで進める体制に、成長の余地があります。"
    },
    {
      id: "learning", en: "LEARNING", jp: "改善と循環",
      color: "#7767D8",
      cardDesc: "結果を測定し、学びを次の共創へ反映できているか。",
      completeTitle: "LEARNING COMPLETE",
      completeBody: "改善と循環に関する回答が完了しました。",
      completeNote: "学びを次の共創へ還すことで、共創は文化として根づきます。",
      keyword: "改善循環",
      strengthBody: "成果を測定し、学びを次の共創へ活かす循環ができています。",
      growthBody: "成果を測定し、次の共創へ反映する仕組みに、成長の余地があります。"
    }
  ];

  var QUESTIONS = [
    { cat: 0, text: "自社が共創によって実現したい未来が、明確に言語化されている。" },
    { cat: 0, text: "共創プロジェクトの目的が、参加する関係者に共有されている。" },
    { cat: 0, text: "短期的な売上だけでなく、社会や顧客に生み出す価値が定義されている。" },
    { cat: 1, text: "部署や役職を越えて、意見を出し合える環境がある。" },
    { cat: 1, text: "現場から生まれた意見やアイデアが、意思決定に反映されている。" },
    { cat: 1, text: "異なる立場の意見を調整し、前へ進める役割を担う人材がいる。" },
    { cat: 2, text: "顧客満足度だけでなく、顧客の期待や感情を把握している。" },
    { cat: 2, text: "顧客の声を、商品やサービスの改善に活用している。" },
    { cat: 2, text: "顧客と一緒に新しい価値を考える機会がある。" },
    { cat: 3, text: "自社が顧客に提供する体験価値が明確になっている。" },
    { cat: 3, text: "競合との違いを、機能や価格以外の価値として説明できる。" },
    { cat: 3, text: "自社単独では実現できない価値を、他者との共創によって生み出している。" },
    { cat: 4, text: "自社に不足する専門性やリソースを把握している。" },
    { cat: 4, text: "社外の企業や専門家と、継続的な関係を構築している。" },
    { cat: 4, text: "共創相手と、目的・役割・成果の基準を共有している。" },
    { cat: 5, text: "共創プロジェクトを進めるプロセスが明確になっている。" },
    { cat: 5, text: "参加者ごとの役割と責任範囲が整理されている。" },
    { cat: 5, text: "対話だけで終わらず、意思決定へ進む仕組みがある。" },
    { cat: 6, text: "新しいアイデアを、小さく試す機会や環境がある。" },
    { cat: 6, text: "共創によって生まれた企画を、実装まで進める責任者がいる。" },
    { cat: 6, text: "失敗から学び、再度挑戦できる文化がある。" },
    { cat: 7, text: "共創によって生まれた成果を測定している。" },
    { cat: 7, text: "顧客、従業員、パートナーの体験変化を確認している。" },
    { cat: 7, text: "得られた学びを、次の企画や事業へ反映している。" }
  ];

  var ANSWER_OPTIONS = [
    { v: 5, label: "強く当てはまる" },
    { v: 4, label: "やや当てはまる" },
    { v: 3, label: "どちらとも言えない" },
    { v: 2, label: "あまり当てはまらない" },
    { v: 1, label: "まったく当てはまらない" }
  ];

  var LEVELS = [
    { min: 85, max: 100, code: "S", name: "共創循環型", desc: "共創が組織文化と事業活動に組み込まれ、継続的な価値創出につながっている状態。" },
    { min: 70, max: 84, code: "A", name: "共創実践型", desc: "共創を実践する土台があり、複数の取り組みが進んでいる状態。" },
    { min: 50, max: 69, code: "B", name: "共創準備型", desc: "共創の必要性は理解されているが、仕組みや実行体制が不足している状態。" },
    { min: 0, max: 49, code: "C", name: "個別活動型", desc: "共創が一部の担当者や単発企画に依存している状態。" }
  ];

  var TYPES = {
    vision: {
      code: "VISION BUILDER", name: "未来構想型",
      heading: "未来を描く力はある。\n次に必要なのは、実行と検証の設計。",
      strength: "目的や未来を描く力が強い。",
      weak: "一方で、具体的な実行や測定の仕組みが課題になりやすい。"
    },
    connector: {
      code: "CONNECTOR", name: "関係構築型",
      heading: "人と組織をつなぐ力はある。\n次に必要なのは、目的と成果基準の共有。",
      strength: "人や組織をつなぐ力が強い。",
      weak: "一方で、共創の目的や成果基準が曖昧になりやすい。"
    },
    implementer: {
      code: "IMPLEMENTER", name: "実装推進型",
      heading: "共創を始める力はある。\n次に必要なのは、成果へ変える設計。",
      strength: "企画を具体化し、実行へ進める力が強い。",
      weak: "一方で、顧客体験や長期的な価値設計が不足しやすい。"
    },
    cycle: {
      code: "CYCLE DESIGNER", name: "循環設計型",
      heading: "共創を循環させる力がある。\n次に必要なのは、組織全体への展開。",
      strength: "目的、関係構築、実行、改善を循環させる力が強い。",
      weak: "組織全体へ共創を広げる段階にある。"
    }
  };

  var NEXT_ACTIONS = [
    {
      title: "共創の成果基準を定義する",
      body: "売上だけでなく、顧客体験、従業員体験、パートナーとの関係変化を測定対象に設定する。"
    },
    {
      title: "共創プロセスを標準化する",
      body: "目的設定、関係者選定、対話、意思決定、実装、評価までの流れを整理する。"
    },
    {
      title: "共創を推進する役割を設置する",
      body: "関係者の意見を翻訳し、意思決定と実装を進める共創マネージャーを配置する。"
    }
  ];

  var TOTAL_Q = QUESTIONS.length; // 24
  var STORAGE_KEY = "ccw_diagnosis_v1";

  /* ----------------------------------------------------------------------
   * 2. STATE
   * ------------------------------------------------------------------- */

  var state = {
    screen: "top",              // top | about | categories | question | catcomplete | analyzing | result
    qIndex: 0,                  // 0-23 current question index (for 'question' screen)
    completedCat: 0,            // category index shown on 'catcomplete' screen
    answers: new Array(TOTAL_Q).fill(null),
    result: null,               // cached computed result object
    formSent: false
  };

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        screen: state.screen,
        qIndex: state.qIndex,
        completedCat: state.completedCat,
        answers: state.answers
      }));
    } catch (e) { /* ignore quota errors */ }
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return false;
      var data = JSON.parse(raw);
      if (!data || !Array.isArray(data.answers) || data.answers.length !== TOTAL_Q) return false;
      state.answers = data.answers;
      state.qIndex = typeof data.qIndex === "number" ? data.qIndex : 0;
      state.completedCat = typeof data.completedCat === "number" ? data.completedCat : 0;
      // Never restore into transient screens
      var restoreScreen = data.screen;
      if (restoreScreen === "analyzing") restoreScreen = allAnswered() ? "result" : "question";
      state.screen = restoreScreen || "top";
      return true;
    } catch (e) { return false; }
  }

  function resetState() {
    state.screen = "top";
    state.qIndex = 0;
    state.completedCat = 0;
    state.answers = new Array(TOTAL_Q).fill(null);
    state.result = null;
    state.formSent = false;
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ }
  }

  function allAnswered() {
    for (var i = 0; i < TOTAL_Q; i++) { if (state.answers[i] === null) return false; }
    return true;
  }

  function answeredCount() {
    var c = 0;
    for (var i = 0; i < TOTAL_Q; i++) { if (state.answers[i] !== null) c++; }
    return c;
  }

  function categoryOfQuestion(qIdx) { return QUESTIONS[qIdx].cat; }

  /* ----------------------------------------------------------------------
   * 3. SCORE CALCULATION
   * ------------------------------------------------------------------- */

  function computeResult() {
    var catScores = [];
    for (var c = 0; c < CATEGORIES.length; c++) {
      var sum = 0, max = 0;
      for (var i = 0; i < TOTAL_Q; i++) {
        if (QUESTIONS[i].cat === c) {
          sum += (state.answers[i] || 0);
          max += 5;
        }
      }
      catScores.push(Math.round((sum / max) * 100));
    }
    var totalSum = 0;
    for (var j = 0; j < TOTAL_Q; j++) { totalSum += (state.answers[j] || 0); }
    var overall = Math.round((totalSum / (TOTAL_Q * 5)) * 100);

    var level = LEVELS[LEVELS.length - 1];
    for (var l = 0; l < LEVELS.length; l++) {
      if (overall >= LEVELS[l].min && overall <= LEVELS[l].max) { level = LEVELS[l]; break; }
    }

    // sorted indices by score
    var idxSorted = CATEGORIES.map(function (_, i) { return i; });
    idxSorted.sort(function (a, b) { return catScores[b] - catScores[a]; });
    var topTwo = [idxSorted[0], idxSorted[1]];
    var bottomTwo = [idxSorted[idxSorted.length - 1], idxSorted[idxSorted.length - 2]];

    // type heuristic
    var visionScore = (catScores[0] + catScores[3]) / 2;      // purpose + value
    var connectorScore = (catScores[1] + catScores[4]) / 2;    // organization + partner
    var implementerScore = (catScores[5] + catScores[6]) / 2;  // design + action
    var maxScore = Math.max.apply(null, catScores);
    var minScore = Math.min.apply(null, catScores);
    var balanced = (maxScore - minScore) <= 20;

    var typeKey = "implementer";
    if (overall >= 80 && balanced) {
      typeKey = "cycle";
    } else {
      var best = Math.max(visionScore, connectorScore, implementerScore);
      if (best === visionScore) typeKey = "vision";
      else if (best === connectorScore) typeKey = "connector";
      else typeKey = "implementer";
    }

    return {
      catScores: catScores,
      overall: overall,
      level: level,
      topTwo: topTwo,
      bottomTwo: bottomTwo,
      typeKey: typeKey,
      type: TYPES[typeKey]
    };
  }

  /* ----------------------------------------------------------------------
   * 4. WHEEL GEOMETRY / RENDERING
   * ------------------------------------------------------------------- */

  var CX = 220, CY = 220;
  var RING_OUTER = 178, RING_INNER = 124;
  var HILITE_OUTER = 190;
  var CAT_SPAN = 41;      // total angular span per category (of 45)
  var SEG_GAP = 1.1;      // gap between the 3 sub-segments inside a category

  function deg2rad(d) { return (d * Math.PI) / 180; }
  function polar(cx, cy, r, angleDeg) {
    var rad = deg2rad(angleDeg);
    return { x: cx + r * Math.sin(rad), y: cy - r * Math.cos(rad) };
  }
  function donutArcPath(cx, cy, rOuter, rInner, a0, a1) {
    var p1 = polar(cx, cy, rOuter, a0);
    var p2 = polar(cx, cy, rOuter, a1);
    var p3 = polar(cx, cy, rInner, a1);
    var p4 = polar(cx, cy, rInner, a0);
    var large = (a1 - a0) > 180 ? 1 : 0;
    return "M " + p1.x.toFixed(2) + " " + p1.y.toFixed(2) +
      " A " + rOuter + " " + rOuter + " 0 " + large + " 1 " + p2.x.toFixed(2) + " " + p2.y.toFixed(2) +
      " L " + p3.x.toFixed(2) + " " + p3.y.toFixed(2) +
      " A " + rInner + " " + rInner + " 0 " + large + " 0 " + p4.x.toFixed(2) + " " + p4.y.toFixed(2) +
      " Z";
  }

  function catCenterAngle(catIndex) { return catIndex * 45; }
  function catSpanRange(catIndex) {
    var c = catCenterAngle(catIndex);
    return { start: c - CAT_SPAN / 2, end: c + CAT_SPAN / 2 };
  }
  function segRange(catIndex, segIndex) {
    var range = catSpanRange(catIndex);
    var usable = CAT_SPAN - 2 * SEG_GAP;
    var segW = usable / 3;
    var start = range.start + segIndex * (segW + SEG_GAP);
    return { start: start, end: start + segW };
  }

  var wheelRotorEl, wheelLabelsEl, wcTitleEl, wcValueEl, wcSubEl, wheelContainerEl, wheelCaptionEl;
  var segPaths = []; // 24 <path> refs
  var hiliteEl;
  var rotorAngle = 0;
  var wheelMode = "progress"; // 'progress' | 'result'

  function buildWheelBase() {
    wheelRotorEl = document.getElementById("wheelRotor");
    wheelLabelsEl = document.getElementById("wheelLabels");
    wcTitleEl = document.getElementById("wcTitle");
    wcValueEl = document.getElementById("wcValue");
    wcSubEl = document.getElementById("wcSub");
    wheelContainerEl = document.getElementById("wheelContainer");
    wheelCaptionEl = document.getElementById("wheelCaption");

    // highlight arc (drawn first, sits behind segments)
    hiliteEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
    hiliteEl.setAttribute("class", "wheel-hilite");
    wheelRotorEl.appendChild(hiliteEl);

    // 24 progress segments
    segPaths = [];
    for (var i = 0; i < TOTAL_Q; i++) {
      var cat = QUESTIONS[i].cat;
      var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("class", "wheel-seg");
      path.setAttribute("data-index", i);
      path.setAttribute("data-cat", cat);
      wheelRotorEl.appendChild(path);
      segPaths.push(path);
    }
    layoutSegments();

    // labels (HTML overlay, 8)
    wheelLabelsEl.innerHTML = "";
    CATEGORIES.forEach(function (cat, i) {
      var wrap = document.createElement("div");
      wrap.className = "wheel-label";
      wrap.dataset.cat = i;
      wrap.innerHTML =
        '<span class="wl-inner">' +
        '<span class="wl-en">' + cat.en + '</span>' +
        '<span class="wl-jp">' + cat.jp + '</span>' +
        '<span class="wl-check" aria-hidden="true">&#10003;</span>' +
        "</span>";
      wheelLabelsEl.appendChild(wrap);
    });

    window.addEventListener("resize", layoutLabels);
  }

  function layoutSegments() {
    for (var i = 0; i < TOTAL_Q; i++) {
      var cat = QUESTIONS[i].cat;
      var start = 0;
      for (var k = 0; k < TOTAL_Q; k++) { if (QUESTIONS[k].cat === cat) { start = k; break; } }
      var segIdx = i - start;
      var r = segRange(cat, segIdx);
      segPaths[i].setAttribute("d", donutArcPath(CX, CY, RING_OUTER, RING_INNER, r.start, r.end));
      segPaths[i].style.fill = "#E4E6EC";
    }
  }

  function layoutLabels() {
    if (!wheelContainerEl) return;
    var w = wheelContainerEl.clientWidth || wheelContainerEl.offsetWidth || 320;
    var radiusPx = (w / 2) * 0.90;
    var labels = wheelLabelsEl.querySelectorAll(".wheel-label");
    labels.forEach(function (el) {
      var i = Number(el.dataset.cat);
      var angle = catCenterAngle(i) + rotorAngle;
      el.style.transform = "rotate(" + angle + "deg) translate(0, -" + radiusPx.toFixed(1) + "px) rotate(" + (-angle) + "deg)";
    });
  }

  function setHilite(catIndex) {
    if (wheelMode !== "progress") { hiliteEl.setAttribute("d", ""); return; }
    var r = catSpanRange(catIndex);
    hiliteEl.setAttribute("d", donutArcPath(CX, CY, HILITE_OUTER, RING_OUTER + 1, r.start, r.end));
    hiliteEl.style.fill = CATEGORIES[catIndex].color;
    hiliteEl.style.opacity = "0.16";
  }

  function updateRotorRotation(catIndex) {
    rotorAngle = -catCenterAngle(catIndex);
    wheelRotorEl.style.transformOrigin = CX + "px " + CY + "px";
    wheelRotorEl.style.transform = "rotate(" + rotorAngle + "deg)";
    layoutLabels();
  }

  function updateSegmentColors() {
    for (var i = 0; i < TOTAL_Q; i++) {
      var cat = QUESTIONS[i].cat;
      if (state.answers[i] !== null) {
        segPaths[i].style.fill = CATEGORIES[cat].color;
      } else {
        segPaths[i].style.fill = "#E4E6EC";
      }
    }
  }

  function updateLabelStates(activeCatIndex) {
    var labels = wheelLabelsEl.querySelectorAll(".wheel-label");
    labels.forEach(function (el) {
      var i = Number(el.dataset.cat);
      el.classList.remove("is-active", "is-done", "is-idle");
      var qIdxOfCat = -1;
      for (var k = 0; k < TOTAL_Q; k++) { if (QUESTIONS[k].cat === i) { qIdxOfCat = k; break; } }
      var catDone = true;
      for (var m = 0; m < TOTAL_Q; m++) { if (QUESTIONS[m].cat === i && state.answers[m] === null) { catDone = false; break; } }
      if (i === activeCatIndex && state.screen === "question") {
        el.classList.add("is-active");
      } else if (catDone) {
        el.classList.add("is-done");
      } else {
        el.classList.add("is-idle");
      }
    });
  }

  function setWheelCenter(title, value, sub) {
    wcTitleEl.textContent = title;
    wcValueEl.textContent = value;
    wcSubEl.textContent = sub || "";
  }

  function renderProgressWheel(activeCatIndex) {
    wheelMode = "progress";
    layoutSegments();
    updateSegmentColors();
    updateRotorRotation(activeCatIndex);
    setHilite(activeCatIndex);
    updateLabelStates(activeCatIndex);
  }

  function renderResultWheel(result) {
    wheelMode = "result";
    rotorAngle = 0;
    wheelRotorEl.style.transformOrigin = CX + "px " + CY + "px";
    wheelRotorEl.style.transform = "rotate(0deg)";
    hiliteEl.setAttribute("d", "");
    for (var i = 0; i < TOTAL_Q; i++) {
      var cat = QUESTIONS[i].cat;
      var start = 0;
      for (var k = 0; k < TOTAL_Q; k++) { if (QUESTIONS[k].cat === cat) { start = k; break; } }
      var segIdx = i - start;
      var score = result.catScores[cat] / 100;
      var outer = RING_INNER + (RING_OUTER - RING_INNER) * Math.max(score, 0.18);
      var r = segRange(cat, segIdx);
      segPaths[i].setAttribute("d", donutArcPath(CX, CY, outer, RING_INNER, r.start, r.end));
      segPaths[i].style.fill = CATEGORIES[cat].color;
      segPaths[i].style.opacity = String(0.55 + 0.45 * score);
    }
    layoutLabels();
    var labels = wheelLabelsEl.querySelectorAll(".wheel-label");
    labels.forEach(function (el) {
      el.classList.remove("is-active", "is-idle");
      el.classList.add("is-done");
    });
  }

  function playAnalyzingSpin(onDone) {
    wheelMode = "progress";
    layoutSegments();
    updateSegmentColors();
    hiliteEl.setAttribute("d", "");
    wheelRotorEl.style.transition = "transform 2.2s cubic-bezier(.65,0,.35,1)";
    wheelRotorEl.style.transformOrigin = CX + "px " + CY + "px";
    wheelRotorEl.style.transform = "rotate(" + (rotorAngle - 360) + "deg)";
    var labels = wheelLabelsEl.querySelectorAll(".wheel-label");
    labels.forEach(function (el) { el.classList.remove("is-active"); el.classList.add("is-done"); });
    setTimeout(function () {
      wheelRotorEl.style.transition = "";
      if (onDone) onDone();
    }, 2250);
  }

  /* ----------------------------------------------------------------------
   * 5. RENDER HELPERS
   * ------------------------------------------------------------------- */

  var contentInner = null;
  function fadeSwap(html, afterMount) {
    if (!contentInner) contentInner = document.getElementById("contentInner");
    contentInner.classList.add("fade-out");
    setTimeout(function () {
      contentInner.innerHTML = html;
      contentInner.classList.remove("fade-out");
      contentInner.classList.add("fade-in");
      contentInner.scrollTop = 0;
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
      if (afterMount) afterMount();
      setTimeout(function () { contentInner.classList.remove("fade-in"); }, 500);
    }, 220);
  }

  function progressPercent() { return Math.round((answeredCount() / TOTAL_Q) * 100); }

  /* ----------------------------------------------------------------------
   * 6. SCREEN TEMPLATES
   * ------------------------------------------------------------------- */

  function screenTop() {
    var html =
      '<div class="scr scr-top">' +
      '<div class="eyebrow">WELLTOPIA CO-CREATION DIAGNOSIS</div>' +
      '<h1 class="headline serif">共創は、偶然ではなく、<br>設計できる。</h1>' +
      '<p class="lead">企業の目的、組織、顧客、パートナー、実行力。<br>8つの視点から、自社の共創力を可視化します。</p>' +
      '<p class="body-text">この診断では、現在の強みだけでなく、共創を成果へ変えるために不足している要素と、次に取り組むべき行動を明らかにします。</p>' +
      '<ul class="meta-list">' +
      '<li><span class="meta-dot"></span>全24問</li>' +
      '<li><span class="meta-dot"></span>所要時間：約5〜7分</li>' +
      '<li><span class="meta-dot"></span>回答結果は診断レポートとして確認可能</li>' +
      "</ul>" +
      '<button class="btn btn-primary" id="btnStart">診断を始める <span class="arrow">&rarr;</span></button>' +
      "</div>";
    fadeSwap(html, function () {
      document.getElementById("btnStart").addEventListener("click", function () { goTo("about"); });
    });
    setWheelCenter("Co-Creation Wheel", "START", "");
    renderProgressWheel(0);
    wheelCaptionEl.textContent = "診断を始めると、回答するたびにホイールが完成していきます。";
  }

  function screenAbout() {
    var html =
      '<div class="scr scr-about">' +
      '<div class="eyebrow">ABOUT THE DIAGNOSIS</div>' +
      '<h2 class="headline2 serif">共創力は、複数の要素が<br>循環することで生まれる。</h2>' +
      '<p class="body-text">共創は、社外の企業や専門家を集めるだけでは成立しません。</p>' +
      '<p class="body-text">共通の目的を描き、顧客の期待を理解し、多様な関係者をつなぎ、価値を設計し、実行と改善を繰り返す。</p>' +
      '<p class="body-text">それぞれの要素がつながったとき、共創は一時的な企画ではなく、企業の成長を生み出す力へ変わります。</p>' +
      '<div class="nav-row">' +
      '<button class="btn btn-ghost" id="btnBack">&larr; 戻る</button>' +
      '<button class="btn btn-primary" id="btnNext">8つの診断領域を見る <span class="arrow">&rarr;</span></button>' +
      "</div>" +
      "</div>";
    fadeSwap(html, function () {
      document.getElementById("btnNext").addEventListener("click", function () { goTo("categories"); });
      document.getElementById("btnBack").addEventListener("click", function () { goTo("top"); });
    });
  }

  function screenCategories() {
    var cards = CATEGORIES.map(function (cat, i) {
      return (
        '<div class="cat-card">' +
        '<div class="cat-card-num">0' + (i + 1) + "</div>" +
        '<div class="cat-card-body">' +
        '<div class="cat-card-title"><span class="cc-en">' + cat.en + "</span><span class=\"cc-jp\">｜" + cat.jp + "</span></div>" +
        '<p class="cat-card-desc">' + cat.cardDesc + "</p>" +
        "</div>" +
        '<span class="cat-card-dot" style="background:' + cat.color + '"></span>' +
        "</div>"
      );
    }).join("");
    var html =
      '<div class="scr scr-categories">' +
      '<div class="eyebrow">8 DIAGNOSTIC AREAS</div>' +
      '<h2 class="headline2 serif">8つの視点から、<br>共創力を診断します。</h2>' +
      '<div class="cat-card-list">' + cards + "</div>" +
      '<div class="nav-row">' +
      '<button class="btn btn-ghost" id="btnBack">&larr; 戻る</button>' +
      '<button class="btn btn-primary" id="btnNext">診断を開始する <span class="arrow">&rarr;</span></button>' +
      "</div>" +
      "</div>";
    fadeSwap(html, function () {
      document.getElementById("btnNext").addEventListener("click", function () { startQuestion(0); });
      document.getElementById("btnBack").addEventListener("click", function () { goTo("about"); });
    });
  }

  function screenQuestion() {
    var qIdx = state.qIndex;
    var q = QUESTIONS[qIdx];
    var cat = CATEGORIES[q.cat];
    var selected = state.answers[qIdx];

    var options = ANSWER_OPTIONS.map(function (opt) {
      var isSel = selected === opt.v;
      return (
        '<button class="answer-btn' + (isSel ? " is-selected" : "") + '" data-value="' + opt.v + '">' +
        '<span class="ab-value">' + opt.v + "</span>" +
        '<span class="ab-label">' + opt.label + "</span>" +
        "</button>"
      );
    }).join("");

    var html =
      '<div class="scr scr-question">' +
      '<div class="q-meta">' +
      '<span class="q-cat" style="color:' + cat.color + '">' + cat.en + "｜" + cat.jp + "</span>" +
      '<span class="q-count">' + (qIdx + 1) + " / " + TOTAL_Q + "問</span>" +
      "</div>" +
      '<div class="q-progress-track"><div class="q-progress-bar" style="width:' + progressPercent() + '%"></div></div>' +
      '<h2 class="q-text">' + q.text + "</h2>" +
      '<div class="answer-list" id="answerList">' + options + "</div>" +
      '<div class="nav-row q-nav">' +
      '<button class="btn btn-ghost" id="btnPrev"' + (qIdx === 0 ? " disabled" : "") + ">&larr; 前の設問へ戻る</button>" +
      '<span class="q-progress-text">' + progressPercent() + "% 完了</span>" +
      '<button class="btn btn-primary" id="btnNext"' + (selected === null ? " disabled" : "") + ">次の設問へ進む &rarr;</button>" +
      "</div>" +
      "</div>";

    fadeSwap(html, function () {
      var answerList = document.getElementById("answerList");
      answerList.querySelectorAll(".answer-btn").forEach(function (btn) {
        btn.addEventListener("click", function () { chooseAnswer(qIdx, Number(btn.dataset.value)); });
      });
      var btnPrev = document.getElementById("btnPrev");
      if (btnPrev) btnPrev.addEventListener("click", function () { goPrevQuestion(); });
      var btnNext = document.getElementById("btnNext");
      if (btnNext) btnNext.addEventListener("click", function () {
        if (state.answers[qIdx] !== null) advanceAfterAnswer(qIdx);
      });
    });

    setWheelCenter("Co-Creation Wheel", progressPercent() + "%", (qIdx + 1) + " / " + TOTAL_Q + "問");
    renderProgressWheel(q.cat);
    wheelCaptionEl.textContent = "現在の診断領域：" + cat.en + "｜" + cat.jp;
  }

  function chooseAnswer(qIdx, value) {
    state.answers[qIdx] = value;
    saveState();
    // visually mark selection immediately
    var list = document.getElementById("answerList");
    if (list) {
      list.querySelectorAll(".answer-btn").forEach(function (btn) {
        btn.classList.toggle("is-selected", Number(btn.dataset.value) === value);
      });
    }
    var seg = segPaths[qIdx];
    var btnNext = document.getElementById("btnNext");
    if (btnNext) btnNext.removeAttribute("disabled");
    setTimeout(function () {
      if (seg) seg.style.fill = CATEGORIES[QUESTIONS[qIdx].cat].color;
      var pct = progressPercent();
      setWheelCenter("Co-Creation Wheel", pct + "%", (qIdx + 1) + " / " + TOTAL_Q + "問");
      var track = document.querySelector(".q-progress-bar");
      if (track) track.style.width = pct + "%";
      var ptxt = document.querySelector(".q-progress-text");
      if (ptxt) ptxt.textContent = pct + "% 完了";
    }, 60);
    setTimeout(function () { advanceAfterAnswer(qIdx); }, 320);
  }

  var advanceLock = false;
  function advanceAfterAnswer(qIdx) {
    if (advanceLock) return;
    advanceLock = true;
    setTimeout(function () { advanceLock = false; }, 400);

    var cat = QUESTIONS[qIdx].cat;
    var isLastInCat = (qIdx === TOTAL_Q - 1) || QUESTIONS[qIdx + 1].cat !== cat;
    if (isLastInCat) {
      state.completedCat = cat;
      saveState();
      goTo("catcomplete");
    } else {
      startQuestion(qIdx + 1);
    }
  }

  function goPrevQuestion() {
    var qIdx = state.qIndex;
    if (qIdx <= 0) return;
    startQuestion(qIdx - 1);
  }

  function startQuestion(qIdx) {
    state.screen = "question";
    state.qIndex = qIdx;
    saveState();
    screenQuestion();
  }

  function screenCatComplete() {
    var cat = CATEGORIES[state.completedCat];
    var isLast = state.completedCat === CATEGORIES.length - 1;
    var html =
      '<div class="scr scr-catcomplete">' +
      '<div class="cc-check" style="background:' + cat.color + '">&#10003;</div>' +
      '<div class="eyebrow" style="color:' + cat.color + '">' + cat.completeTitle + "</div>" +
      '<h2 class="headline2 serif">' + cat.completeBody + "</h2>" +
      '<p class="body-text small">' + cat.completeNote + "</p>" +
      '<div class="nav-row centered">' +
      '<button class="btn btn-primary" id="btnNextCat">' +
      (isLast ? "診断結果を分析する" : "次のカテゴリーへ") + ' <span class="arrow">&rarr;</span>' +
      "</button>" +
      "</div>" +
      "</div>";
    fadeSwap(html, function () {
      document.getElementById("btnNextCat").addEventListener("click", proceedAfterCatComplete);
    });
    updateSegmentColors();
    updateLabelStates(state.completedCat);
    setHilite(state.completedCat);
    setWheelCenter("Co-Creation Wheel", progressPercent() + "%", cat.en + " COMPLETE");
    wheelCaptionEl.textContent = cat.en + "｜" + cat.jp + " の回答が完了しました。";

    clearTimeout(screenCatComplete._t);
    screenCatComplete._t = setTimeout(proceedAfterCatComplete, 3000);
  }

  function proceedAfterCatComplete() {
    if (state.screen !== "catcomplete") return;
    clearTimeout(screenCatComplete._t);
    var nextCat = state.completedCat + 1;
    if (nextCat >= CATEGORIES.length) {
      goTo("analyzing");
    } else {
      var nextQ = 0;
      for (var i = 0; i < TOTAL_Q; i++) { if (QUESTIONS[i].cat === nextCat) { nextQ = i; break; } }
      startQuestion(nextQ);
    }
  }

  function screenAnalyzing() {
    var html =
      '<div class="scr scr-analyzing">' +
      '<div class="eyebrow">ANALYZING</div>' +
      '<h2 class="headline2 serif">あなたの共創力を<br>分析しています。</h2>' +
      '<ul class="analyze-list" id="analyzeList">' +
      '<li data-i="0"><span class="al-dot"></span>8カテゴリーのバランスを算出中</li>' +
      '<li data-i="1"><span class="al-dot"></span>共創力の強みを抽出中</li>' +
      '<li data-i="2"><span class="al-dot"></span>成長を妨げている要因を特定中</li>' +
      '<li data-i="3"><span class="al-dot"></span>共創タイプを判定中</li>' +
      '<li data-i="4"><span class="al-dot"></span>次に取り組むべきアクションを生成中</li>' +
      "</ul>" +
      "</div>";
    fadeSwap(html);
    wheelCaptionEl.textContent = "回答データから、共創力スコアを算出しています。";

    var result = computeResult();
    state.result = result;

    playAnalyzingSpin(function () {
      countUpCenter(result.overall, function () {
        setTimeout(function () { goTo("result"); }, 500);
      });
    });

    var items = document.querySelectorAll("#analyzeList li");
    items.forEach(function (li, i) {
      setTimeout(function () { li.classList.add("is-active"); }, 350 + i * 420);
    });
  }

  function countUpCenter(target, onDone) {
    var start = 0;
    var duration = 1800;
    var startTime = null;
    setWheelCenter("Co-Creation Score", "0", "分析中…");
    function step(ts) {
      if (!startTime) startTime = ts;
      var p = Math.min(1, (ts - startTime) / duration);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.round(start + (target - start) * eased);
      wcValueEl.textContent = String(val);
      if (p < 1) {
        requestAnimationFrame(step);
      } else {
        wcValueEl.textContent = String(target);
        if (onDone) onDone();
      }
    }
    requestAnimationFrame(step);
  }

  function screenResult() {
    var result = state.result || computeResult();
    state.result = result;

    var barsHtml = CATEGORIES.map(function (cat, i) {
      var score = result.catScores[i];
      return (
        '<div class="score-row">' +
        '<div class="score-row-label"><span class="sr-en">' + cat.en + '</span><span class="sr-jp">' + cat.jp + "</span></div>" +
        '<div class="score-row-track"><div class="score-row-fill" style="width:' + score + '%;background:' + cat.color + '"></div></div>' +
        '<div class="score-row-num">' + score + "</div>" +
        "</div>"
      );
    }).join("");

    var topCats = result.topTwo.map(function (i) { return CATEGORIES[i]; });
    var bottomCats = result.bottomTwo.map(function (i) { return CATEGORIES[i]; });
    var strengthTitle = topCats[0].keyword + "・" + topCats[1].keyword;
    var strengthBody = topCats[0].strengthBody + " " + topCats[1].strengthBody;
    var growthTitle = bottomCats[0].keyword + "・" + bottomCats[1].keyword;
    var growthBody = bottomCats[0].growthBody + " " + bottomCats[1].growthBody;

    var actionsHtml = NEXT_ACTIONS.map(function (a, i) {
      return (
        '<div class="action-card">' +
        '<div class="action-num">0' + (i + 1) + "</div>" +
        '<div class="action-body"><div class="action-title">' + a.title + "</div><p>" + a.body + "</p></div>" +
        "</div>"
      );
    }).join("");

    var html =
      '<div class="scr scr-result">' +
      '<div class="eyebrow">YOUR CO-CREATION RESULT</div>' +
      '<h2 class="headline2 serif">' + result.type.heading.replace(/\n/g, "<br>") + "</h2>" +
      '<div class="result-level-chip">LEVEL ' + result.level.code + '｜' + result.level.name + '<span class="rl-score">' + result.overall + " / 100</span></div>" +
      '<p class="body-text">あなたの組織には、社内外の関係者と新しい価値を生み出す土台があります。</p>' +
      '<p class="body-text">一方で、共創の目的やアイデアを、具体的な実行・測定・改善へつなげる仕組みには、成長の余地があります。</p>' +
      '<p class="body-text">強みを活かしながら、共創を継続的な事業成長へ変える設計が必要です。</p>' +

      '<div class="type-card">' +
      '<div class="type-code">' + result.type.code + "｜" + result.type.name + "</div>" +
      '<p>' + result.type.strength + "</p><p>" + result.type.weak + "</p>" +
      "</div>" +

      '<h3 class="sub-heading">カテゴリー別スコア</h3>' +
      '<div class="score-row-list">' + barsHtml + "</div>" +

      '<div class="sw-grid">' +
      '<div class="sw-card sw-strength"><div class="sw-tag">強み</div><div class="sw-title">' + strengthTitle + "</div><p>" + strengthBody + "</p></div>" +
      '<div class="sw-card sw-growth"><div class="sw-tag">成長領域</div><div class="sw-title">' + growthTitle + "</div><p>" + growthBody + "</p></div>" +
      "</div>" +

      '<h3 class="sub-heading">NEXT ACTION</h3>' +
      '<div class="action-list">' + actionsHtml + "</div>" +

      '<div class="cta-block">' +
      '<h3 class="headline2 serif small-h">診断結果を、<br>事業成長へつなげる。</h3>' +
      '<p class="body-text">WELLTOPIAでは、診断結果をもとに、組織の共創力を分析し、事業・商品・組織に必要な共創プロセスを設計します。</p>' +
      '<div class="cta-buttons">' +
      '<button class="btn btn-primary" id="btnCtaMain">詳細診断レポートを受け取る</button>' +
      '<button class="btn btn-outline" id="btnCtaSub">共創マネジメントについて相談する</button>' +
      "</div>" +
      '<div class="cta-form" id="ctaForm" hidden>' +
      '<p class="form-note" id="ctaFormNote">診断結果を保存するため、以下をご入力ください。</p>' +
      '<form id="leadForm">' +
      '<input type="text" name="company" placeholder="会社名" required>' +
      '<input type="text" name="name" placeholder="氏名" required>' +
      '<input type="email" name="email" placeholder="メールアドレス" required>' +
      '<button type="submit" class="btn btn-primary btn-block" id="leadSubmitBtn">送信する</button>' +
      '<div class="form-error" id="formError" hidden>送信に失敗しました。時間をおいて再度お試しください。</div>' +
      "</form>" +
      '<div class="form-success" id="formSuccess" hidden>送信が完了しました。担当より3営業日以内にご連絡いたします。</div>' +
      "</div>" +
      "</div>" +

      '<div class="restart-row"><button class="btn btn-ghost" id="btnRestart">診断を最初からやり直す</button></div>' +
      "</div>";

    fadeSwap(html, function () {
      document.getElementById("btnRestart").addEventListener("click", function () {
        if (confirm("回答内容をリセットして、診断を最初からやり直します。よろしいですか？")) {
          resetState();
          goTo("top");
        }
      });
      var form = document.getElementById("leadForm");
      var ctaForm = document.getElementById("ctaForm");
      var ctaFormNote = document.getElementById("ctaFormNote");
      var submitBtn = document.getElementById("leadSubmitBtn");
      var formError = document.getElementById("formError");
      var requestType = "詳細診断レポート";
      document.getElementById("btnCtaMain").addEventListener("click", function () {
        requestType = "詳細診断レポート";
        ctaFormNote.textContent = "詳細診断レポートをお届けするため、以下をご入力ください。";
        ctaForm.hidden = false;
        ctaForm.scrollIntoView({ behavior: "smooth", block: "center" });
      });
      document.getElementById("btnCtaSub").addEventListener("click", function () {
        requestType = "共創マネジメントについての相談";
        ctaFormNote.textContent = "共創マネジメントに関するご相談のため、以下をご入力ください。";
        ctaForm.hidden = false;
        ctaForm.scrollIntoView({ behavior: "smooth", block: "center" });
      });
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        formError.hidden = true;
        submitBtn.disabled = true;
        submitBtn.textContent = "送信中...";

        var fd = new FormData(form);
        fetch("/api/diagnosis-lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            company: fd.get("company"),
            name: fd.get("name"),
            email: fd.get("email"),
            requestType: requestType,
            result: state.result
          })
        }).then(function (res) {
          if (!res.ok) throw new Error("request failed");
          form.hidden = true;
          ctaFormNote.hidden = true;
          document.getElementById("formSuccess").hidden = false;
        }).catch(function () {
          formError.hidden = false;
          submitBtn.disabled = false;
          submitBtn.textContent = "送信する";
        });
      });
    });

    renderResultWheel(result);
    setWheelCenter("Co-Creation Score", String(result.overall), "LEVEL " + result.level.code);
    wheelCaptionEl.textContent = "診断が完了しました。各領域の色の濃さと長さがスコアを示します。";
  }

  /* ----------------------------------------------------------------------
   * 7. NAVIGATION / ROUTER
   * ------------------------------------------------------------------- */

  function goTo(screen) {
    state.screen = screen;
    saveState();
    switch (screen) {
      case "top": screenTop(); break;
      case "about": screenAbout(); break;
      case "categories": screenCategories(); break;
      case "question": screenQuestion(); break;
      case "catcomplete": screenCatComplete(); break;
      case "analyzing": screenAnalyzing(); break;
      case "result": screenResult(); break;
      default: screenTop();
    }
  }

  /* ----------------------------------------------------------------------
   * 8. KEYBOARD SUPPORT
   * ------------------------------------------------------------------- */

  document.addEventListener("keydown", function (e) {
    if (state.screen !== "question") return;
    if (e.key >= "1" && e.key <= "5") {
      chooseAnswer(state.qIndex, Number(e.key));
    } else if (e.key === "ArrowLeft") {
      goPrevQuestion();
    } else if (e.key === "ArrowRight") {
      if (state.answers[state.qIndex] !== null) advanceAfterAnswer(state.qIndex);
    }
  });

  /* ----------------------------------------------------------------------
   * 9. INIT
   * ------------------------------------------------------------------- */

  function boot() {
    buildWheelBase();
    var restored = loadState();
    if (restored && state.screen !== "top" && answeredCount() > 0) {
      goTo(state.screen);
    } else {
      goTo("top");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
