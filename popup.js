fetch('http://localhost:5000/api/timelog/daily/user1')
  .then(res => res.json())
  .then(data => {
    const reportDiv = document.getElementById('report');
    data.forEach(site => {
      const p = document.createElement('p');
      p.textContent = `${site.url} - ${site.timeSpent.toFixed(2)} seconds`;
      reportDiv.appendChild(p);
    });
  });
