// Embedded Trial Data from synthetic_30_trials.csv
const trialsData = [
  {"Trial":1,"Before_CPU_%":1.17,"Before_RAM_Priv_MiB":394.49,"Before_RAM_PSS_MiB":670.55,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":28.26,"During_Avg_CPU_%":13.58,"During_Peak_RAM_Priv_MiB":683.85,"During_Peak_RAM_PSS_MiB":1041.74,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":4.39,"After_RAM_Priv_MiB":396.09,"After_RAM_PSS_MiB":674.23,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":371.19,"Memory_Leak_PSS_MiB":3.68},
  {"Trial":2,"Before_CPU_%":2.41,"Before_RAM_Priv_MiB":392.42,"Before_RAM_PSS_MiB":672.60,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":26.93,"During_Avg_CPU_%":15.87,"During_Peak_RAM_Priv_MiB":680.04,"During_Peak_RAM_PSS_MiB":1090.25,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":6.43,"After_RAM_Priv_MiB":394.28,"After_RAM_PSS_MiB":671.91,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":417.65,"Memory_Leak_PSS_MiB":-0.69},
  {"Trial":3,"Before_CPU_%":1.82,"Before_RAM_Priv_MiB":394.25,"Before_RAM_PSS_MiB":669.61,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":24.01,"During_Avg_CPU_%":12.27,"During_Peak_RAM_Priv_MiB":744.84,"During_Peak_RAM_PSS_MiB":948.88,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":5.03,"After_RAM_Priv_MiB":398.49,"After_RAM_PSS_MiB":670.42,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":279.27,"Memory_Leak_PSS_MiB":0.81},
  {"Trial":4,"Before_CPU_%":2.02,"Before_RAM_Priv_MiB":390.18,"Before_RAM_PSS_MiB":673.74,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":5.23,"During_Avg_CPU_%":2.88,"During_Peak_RAM_Priv_MiB":691.78,"During_Peak_RAM_PSS_MiB":922.34,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":5.31,"After_RAM_Priv_MiB":398.11,"After_RAM_PSS_MiB":669.16,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":248.60,"Memory_Leak_PSS_MiB":-4.58},
  {"Trial":5,"Before_CPU_%":4.24,"Before_RAM_Priv_MiB":392.06,"Before_RAM_PSS_MiB":670.60,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":15.48,"During_Avg_CPU_%":11.11,"During_Peak_RAM_Priv_MiB":700.34,"During_Peak_RAM_PSS_MiB":1057.21,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":4.67,"After_RAM_Priv_MiB":395.46,"After_RAM_PSS_MiB":669.02,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":386.61,"Memory_Leak_PSS_MiB":-1.58},
  {"Trial":6,"Before_CPU_%":3.11,"Before_RAM_Priv_MiB":396.11,"Before_RAM_PSS_MiB":668.11,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":33.12,"During_Avg_CPU_%":18.45,"During_Peak_RAM_Priv_MiB":780.12,"During_Peak_RAM_PSS_MiB":1089.44,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":5.12,"After_RAM_Priv_MiB":397.02,"After_RAM_PSS_MiB":671.22,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":421.33,"Memory_Leak_PSS_MiB":3.11},
  {"Trial":7,"Before_CPU_%":2.85,"Before_RAM_Priv_MiB":391.80,"Before_RAM_PSS_MiB":671.50,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":19.45,"During_Avg_CPU_%":9.80,"During_Peak_RAM_Priv_MiB":712.40,"During_Peak_RAM_PSS_MiB":1012.30,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":3.90,"After_RAM_Priv_MiB":394.10,"After_RAM_PSS_MiB":669.80,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":340.80,"Memory_Leak_PSS_MiB":-1.70},
  {"Trial":8,"Before_CPU_%":1.50,"Before_RAM_Priv_MiB":395.00,"Before_RAM_PSS_MiB":665.40,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":22.10,"During_Avg_CPU_%":11.30,"During_Peak_RAM_Priv_MiB":755.20,"During_Peak_RAM_PSS_MiB":1033.50,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":6.10,"After_RAM_Priv_MiB":396.80,"After_RAM_PSS_MiB":672.10,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":368.10,"Memory_Leak_PSS_MiB":6.70},
  {"Trial":9,"Before_CPU_%":3.90,"Before_RAM_Priv_MiB":388.90,"Before_RAM_PSS_MiB":675.10,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":41.20,"During_Avg_CPU_%":21.35,"During_Peak_RAM_Priv_MiB":815.94,"During_Peak_RAM_PSS_MiB":1157.71,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":7.41,"After_RAM_Priv_MiB":393.50,"After_RAM_PSS_MiB":668.20,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":482.61,"Memory_Leak_PSS_MiB":-6.90},
  {"Trial":10,"Before_CPU_%":2.10,"Before_RAM_Priv_MiB":393.10,"Before_RAM_PSS_MiB":669.90,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":12.80,"During_Avg_CPU_%":6.10,"During_Peak_RAM_Priv_MiB":650.30,"During_Peak_RAM_PSS_MiB":975.20,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":4.10,"After_RAM_Priv_MiB":395.20,"After_RAM_PSS_MiB":670.30,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":305.30,"Memory_Leak_PSS_MiB":0.40},
  {"Trial":11,"Before_CPU_%":1.15,"Before_RAM_Priv_MiB":397.20,"Before_RAM_PSS_MiB":674.80,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":29.50,"During_Avg_CPU_%":14.20,"During_Peak_RAM_Priv_MiB":762.10,"During_Peak_RAM_PSS_MiB":1055.40,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":5.80,"After_RAM_Priv_MiB":396.90,"After_RAM_PSS_MiB":673.20,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":380.60,"Memory_Leak_PSS_MiB":-1.60},
  {"Trial":12,"Before_CPU_%":4.50,"Before_RAM_Priv_MiB":387.69,"Before_RAM_PSS_MiB":664.59,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":11.20,"During_Avg_CPU_%":5.40,"During_Peak_RAM_Priv_MiB":612.82,"During_Peak_RAM_PSS_MiB":932.10,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":3.20,"After_RAM_Priv_MiB":392.50,"After_RAM_PSS_MiB":666.70,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":267.51,"Memory_Leak_PSS_MiB":2.11},
  {"Trial":13,"Before_CPU_%":3.20,"Before_RAM_Priv_MiB":395.50,"Before_RAM_PSS_MiB":672.30,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":18.90,"During_Avg_CPU_%":9.10,"During_Peak_RAM_Priv_MiB":725.40,"During_Peak_RAM_PSS_MiB":1018.60,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":4.80,"After_RAM_Priv_MiB":397.10,"After_RAM_PSS_MiB":671.50,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":346.30,"Memory_Leak_PSS_MiB":-0.80},
  {"Trial":14,"Before_CPU_%":2.70,"Before_RAM_Priv_MiB":393.40,"Before_RAM_PSS_MiB":671.10,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":27.80,"During_Avg_CPU_%":16.20,"During_Peak_RAM_Priv_MiB":740.10,"During_Peak_RAM_PSS_MiB":1045.20,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":5.20,"After_RAM_Priv_MiB":396.30,"After_RAM_PSS_MiB":670.90,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":374.10,"Memory_Leak_PSS_MiB":-0.20},
  {"Trial":15,"Before_CPU_%":3.10,"Before_RAM_Priv_MiB":392.10,"Before_RAM_PSS_MiB":668.90,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":35.40,"During_Avg_CPU_%":17.80,"During_Peak_RAM_Priv_MiB":772.30,"During_Peak_RAM_PSS_MiB":1078.90,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":6.80,"After_RAM_Priv_MiB":395.80,"After_RAM_PSS_MiB":674.10,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":410.00,"Memory_Leak_PSS_MiB":5.20},
  {"Trial":16,"Before_CPU_%":2.40,"Before_RAM_Priv_MiB":396.80,"Before_RAM_PSS_MiB":676.20,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":14.50,"During_Avg_CPU_%":7.20,"During_Peak_RAM_Priv_MiB":689.40,"During_Peak_RAM_PSS_MiB":988.50,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":4.00,"After_RAM_Priv_MiB":397.80,"After_RAM_PSS_MiB":675.43,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":312.30,"Memory_Leak_PSS_MiB":-0.77},
  {"Trial":17,"Before_CPU_%":1.90,"Before_RAM_Priv_MiB":394.10,"Before_RAM_PSS_MiB":667.80,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":21.60,"During_Avg_CPU_%":12.10,"During_Peak_RAM_Priv_MiB":736.80,"During_Peak_RAM_PSS_MiB":1024.10,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":5.10,"After_RAM_Priv_MiB":396.20,"After_RAM_PSS_MiB":671.00,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":356.30,"Memory_Leak_PSS_MiB":3.20},
  {"Trial":18,"Before_CPU_%":5.36,"Before_RAM_Priv_MiB":389.20,"Before_RAM_PSS_MiB":666.20,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":47.29,"During_Avg_CPU_%":20.80,"During_Peak_RAM_Priv_MiB":805.10,"During_Peak_RAM_PSS_MiB":1153.19,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":0.30,"After_RAM_Priv_MiB":393.80,"After_RAM_PSS_MiB":668.10,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":486.99,"Memory_Leak_PSS_MiB":1.90},
  {"Trial":19,"Before_CPU_%":2.20,"Before_RAM_Priv_MiB":393.80,"Before_RAM_PSS_MiB":671.40,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":16.80,"During_Avg_CPU_%":8.50,"During_Peak_RAM_Priv_MiB":702.10,"During_Peak_RAM_PSS_MiB":1004.20,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":4.50,"After_RAM_Priv_MiB":395.10,"After_RAM_PSS_MiB":669.90,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":332.80,"Memory_Leak_PSS_MiB":-1.50},
  {"Trial":20,"Before_CPU_%":3.60,"Before_RAM_Priv_MiB":391.20,"Before_RAM_PSS_MiB":669.10,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":23.90,"During_Avg_CPU_%":13.40,"During_Peak_RAM_Priv_MiB":748.90,"During_Peak_RAM_PSS_MiB":1036.80,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":5.90,"After_RAM_Priv_MiB":394.80,"After_RAM_PSS_MiB":670.40,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":367.70,"Memory_Leak_PSS_MiB":1.30},
  {"Trial":21,"Before_CPU_%":1.80,"Before_RAM_Priv_MiB":395.80,"Before_RAM_PSS_MiB":673.50,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":8.90,"During_Avg_CPU_%":4.20,"During_Peak_RAM_Priv_MiB":642.10,"During_Peak_RAM_PSS_MiB":962.40,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":3.80,"After_RAM_Priv_MiB":397.20,"After_RAM_PSS_MiB":672.80,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":288.90,"Memory_Leak_PSS_MiB":-0.70},
  {"Trial":22,"Before_CPU_%":4.10,"Before_RAM_Priv_MiB":388.50,"Before_RAM_PSS_MiB":665.20,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":31.20,"During_Avg_CPU_%":15.60,"During_Peak_RAM_Priv_MiB":768.40,"During_Peak_RAM_PSS_MiB":1068.10,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":6.20,"After_RAM_Priv_MiB":393.10,"After_RAM_PSS_MiB":667.80,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":402.90,"Memory_Leak_PSS_MiB":2.60},
  {"Trial":23,"Before_CPU_%":2.60,"Before_RAM_Priv_MiB":398.55,"Before_RAM_PSS_MiB":677.27,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":13.70,"During_Avg_CPU_%":6.70,"During_Peak_RAM_Priv_MiB":675.80,"During_Peak_RAM_PSS_MiB":980.10,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":4.20,"After_RAM_Priv_MiB":398.49,"After_RAM_PSS_MiB":670.01,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":302.83,"Memory_Leak_PSS_MiB":-7.26},
  {"Trial":24,"Before_CPU_%":3.30,"Before_RAM_Priv_MiB":392.80,"Before_RAM_PSS_MiB":670.10,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":25.40,"During_Avg_CPU_%":14.10,"During_Peak_RAM_Priv_MiB":735.20,"During_Peak_RAM_PSS_MiB":1029.50,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":5.40,"After_RAM_Priv_MiB":395.90,"After_RAM_PSS_MiB":670.50,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":359.40,"Memory_Leak_PSS_MiB":0.40},
  {"Trial":25,"Before_CPU_%":1.60,"Before_RAM_Priv_MiB":394.90,"Before_RAM_PSS_MiB":668.40,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":20.10,"During_Avg_CPU_%":10.50,"During_Peak_RAM_Priv_MiB":719.80,"During_Peak_RAM_PSS_MiB":1015.20,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":4.70,"After_RAM_Priv_MiB":396.40,"After_RAM_PSS_MiB":671.20,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":346.80,"Memory_Leak_PSS_MiB":2.80},
  {"Trial":26,"Before_CPU_%":2.90,"Before_RAM_Priv_MiB":391.50,"Before_RAM_PSS_MiB":669.80,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":6.80,"During_Avg_CPU_%":2.80,"During_Peak_RAM_Priv_MiB":638.20,"During_Peak_RAM_PSS_MiB":945.10,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":3.50,"After_RAM_Priv_MiB":394.60,"After_RAM_PSS_MiB":668.90,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":275.30,"Memory_Leak_PSS_MiB":-0.90},
  {"Trial":27,"Before_CPU_%":4.00,"Before_RAM_Priv_MiB":393.90,"Before_RAM_PSS_MiB":672.10,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":30.80,"During_Avg_CPU_%":16.90,"During_Peak_RAM_Priv_MiB":779.10,"During_Peak_RAM_PSS_MiB":1082.40,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":6.00,"After_RAM_Priv_MiB":396.10,"After_RAM_PSS_MiB":672.80,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":410.30,"Memory_Leak_PSS_MiB":0.70},
  {"Trial":28,"Before_CPU_%":2.30,"Before_RAM_Priv_MiB":396.20,"Before_RAM_PSS_MiB":674.90,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":17.20,"During_Avg_CPU_%":8.90,"During_Peak_RAM_Priv_MiB":708.40,"During_Peak_RAM_PSS_MiB":1009.10,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":4.90,"After_RAM_Priv_MiB":397.50,"After_RAM_PSS_MiB":673.50,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":334.20,"Memory_Leak_PSS_MiB":-1.40},
  {"Trial":29,"Before_CPU_%":3.50,"Before_RAM_Priv_MiB":390.80,"Before_RAM_PSS_MiB":667.10,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":28.90,"During_Avg_CPU_%":14.80,"During_Peak_RAM_Priv_MiB":759.20,"During_Peak_RAM_PSS_MiB":1058.20,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":5.70,"After_RAM_Priv_MiB":394.20,"After_RAM_PSS_MiB":670.80,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":391.10,"Memory_Leak_PSS_MiB":3.70},
  {"Trial":30,"Before_CPU_%":1.70,"Before_RAM_Priv_MiB":395.10,"Before_RAM_PSS_MiB":671.80,"Before_GPU_VRAM_MiB":0,"During_Peak_CPU_%":21.40,"During_Avg_CPU_%":11.20,"During_Peak_RAM_Priv_MiB":731.50,"During_Peak_RAM_PSS_MiB":1022.90,"During_Peak_GPU_VRAM_MiB":0,"After_CPU_%":4.40,"After_RAM_Priv_MiB":396.80,"After_RAM_PSS_MiB":671.10,"After_GPU_VRAM_MiB":0,"Delta_Peak_PSS_MiB":351.10,"Memory_Leak_PSS_MiB":-0.70}
];

// Initialize Charts & Table on Load
document.addEventListener("DOMContentLoaded", () => {
  renderTable(trialsData);
  initCPUChart();
  initRAMChart();
  initPSSvsPrivChart();
  initLeakScatterChart();
  initLeakBarChart();
  
  // Search filter functionality
  document.getElementById('tableSearch').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = trialsData.filter(t => t.Trial.toString().includes(term));
    renderTable(filtered);
  });
});

// Render Dynamic Table
function renderTable(data) {
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';
  data.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${row.Trial}</strong></td>
      <td>${row["Before_CPU_%"]}%</td>
      <td>${row["During_Peak_CPU_%"]}%</td>
      <td>${row["During_Avg_CPU_%"]}%</td>
      <td>${row["After_CPU_%"]}%</td>
      <td>${row["Before_RAM_PSS_MiB"]}</td>
      <td>${row["During_Peak_RAM_PSS_MiB"]}</td>
      <td>${row["After_RAM_PSS_MiB"]}</td>
      <td>${row["Delta_Peak_PSS_MiB"]}</td>
      <td style="color: ${row["Memory_Leak_PSS_MiB"] > 0 ? '#f87171' : '#4ade80'}">${row["Memory_Leak_PSS_MiB"]}</td>
    `;
    tbody.appendChild(tr);
  });
}

// 1. CPU Usage Profile Chart
function initCPUChart() {
  const ctx = document.getElementById('cpuChart').getContext('2d');
  const labels = trialsData.map(t => `Trial ${t.Trial}`);
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Peak CPU %',
          data: trialsData.map(t => t["During_Peak_CPU_%"]),
          borderColor: '#38bdf8',
          backgroundColor: 'rgba(56, 189, 248, 0.1)',
          fill: true,
          tension: 0.3
        },
        {
          label: 'Avg CPU %',
          data: trialsData.map(t => t["During_Avg_CPU_%"]),
          borderColor: '#a855f7',
          backgroundColor: 'transparent',
          borderDash: [5, 5],
          tension: 0.3
        },
        {
          label: 'After CPU %',
          data: trialsData.map(t => t["After_CPU_%"]),
          borderColor: '#22c55e',
          backgroundColor: 'transparent',
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#f8fafc' } } },
      scales: {
        x: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } },
        y: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' }, title: { display: true, text: 'CPU Utilization (%)', color: '#94a3b8' } }
      }
    }
  });
}

// 2. RAM Consumption Comparison Chart
function initRAMChart() {
  const ctx = document.getElementById('ramChart').getContext('2d');
  const labels = trialsData.map(t => `Trial ${t.Trial}`);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Before PSS (MiB)',
          data: trialsData.map(t => t["Before_RAM_PSS_MiB"]),
          backgroundColor: '#64748b'
        },
        {
          label: 'Peak PSS (MiB)',
          data: trialsData.map(t => t["During_Peak_RAM_PSS_MiB"]),
          backgroundColor: '#38bdf8'
        },
        {
          label: 'After PSS (MiB)',
          data: trialsData.map(t => t["After_RAM_PSS_MiB"]),
          backgroundColor: '#a855f7'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#f8fafc' } } },
      scales: {
        x: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } },
        y: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' }, title: { display: true, text: 'RAM PSS (MiB)', color: '#94a3b8' } }
      }
    }
  });
}

// 3. Private RAM vs. PSS Comparison
function initPSSvsPrivChart() {
  const ctx = document.getElementById('pssVsPrivChart').getContext('2d');
  const labels = trialsData.map(t => `Trial ${t.Trial}`);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Peak Private RAM (MiB)',
          data: trialsData.map(t => t["During_Peak_RAM_Priv_MiB"]),
          borderColor: '#f59e0b',
          tension: 0.2
        },
        {
          label: 'Peak PSS RAM (MiB)',
          data: trialsData.map(t => t["During_Peak_RAM_PSS_MiB"]),
          borderColor: '#38bdf8',
          tension: 0.2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#f8fafc' } } },
      scales: {
        x: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } },
        y: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' }, title: { display: true, text: 'Memory (MiB)', color: '#94a3b8' } }
      }
    }
  });
}

// 4. Scatter Plot: Delta Peak PSS vs. Memory Leak
function initLeakScatterChart() {
  const ctx = document.getElementById('leakScatterChart').getContext('2d');
  const scatterData = trialsData.map(t => ({
    x: t["Delta_Peak_PSS_MiB"],
    y: t["Memory_Leak_PSS_MiB"]
  }));

  new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Trials Correlation',
        data: scatterData,
        backgroundColor: '#ec4899',
        pointRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#f8fafc' } } },
      scales: {
        x: {
          ticks: { color: '#94a3b8' },
          grid: { color: '#334155' },
          title: { display: true, text: 'Delta Peak PSS (MiB)', color: '#94a3b8' }
        },
        y: {
          ticks: { color: '#94a3b8' },
          grid: { color: '#334155' },
          title: { display: true, text: 'Memory Leak PSS (MiB)', color: '#94a3b8' }
        }
      }
    }
  });
}

// 5. Memory Leak Bar Chart Across Trials
function initLeakBarChart() {
  const ctx = document.getElementById('leakBarChart').getContext('2d');
  const labels = trialsData.map(t => `Trial ${t.Trial}`);
  const leaks = trialsData.map(t => t["Memory_Leak_PSS_MiB"]);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Memory Leak (MiB)',
        data: leaks,
        backgroundColor: leaks.map(val => val > 0 ? '#f87171' : '#4ade80')
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#f8fafc' } } },
      scales: {
        x: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } },
        y: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' }, title: { display: true, text: 'Leak Size (MiB)', color: '#94a3b8' } }
      }
    }
  });
}