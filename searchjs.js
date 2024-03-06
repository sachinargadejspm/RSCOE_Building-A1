let searchable = [
    "<a href='ground.html'>A-105(Digital Library)</a>",
    "<a href='ground.html'>A-106(Periodical Section)</a>",
    "<a href='ground.html'>A-107(PG Reading Room)</a>",
    "<a href='ground.html'>A-108(Audio Visual Room)</a>",
    "<a href='ground.html'>A-109(Training & Placement)</a>",
    "<a href='ground.html'>A-006(MaAhine Lab)</a>",
    "<a href='ground.html'>Reading Hall</a>",
    "<a href='ground.html'>Library</a>",
    "<a href='ground.html'>PG Lab</a>",
    "<a href='ground.html'>OPAC</a>",
    
    "<a href='1st.html'>A-200(Tutorial Room)</a>",
    "<a href='1st.html'>A-201(Multimedia Lab)</a>",
    "<a href='1st.html'>A-202(Computer Centre)</a>",
    "<a href='1st.html'>A-203(Server Room)</a>",
    "<a href='1st.html'>Gents Toilet</a>",
    "<a href='1st.html'>A-204(Ladies Toilet)</a>",
    "<a href='1st.html'>A-205(HOD of IT Department)</a>",
    "<a href='1st.html'>A-206(Network Lab)</a>",
    "<a href='1st.html'>A-207(Faculty Room)</a>",
    "<a href='1st.html'>Store Room</a>",
    "<a href='1st.html'>A-208(Database Lab)</a>",
    "<a href='1st.html'>A-209</a>",
    "<a href='1st.html'>A-210(Student Progression & Industry Relation)</a>",
    "<a href='1st.html'>A-211(Gents Toilet)</a>",
    "<a href='1st.html'>A-212(Project Research Lab)</a>",
    "<a href='1st.html'>A-213(Research Lab)</a>",
    "<a href='1st.html'>A-214(Artificial Intelligence Lab)</a>",

    "<a href='2nd.html'>A-300(Tutorial Room)</a>",
    "<a href='2nd.html'>A-301(Classroom)</a>",
    "<a href='2nd.html'>A-302(Classroom)</a>",
    "<a href='2nd.html'>A-303(Classroom)</a>",
    "<a href='2nd.html'>A-304(Faculty Room)</a>",
    "<a href='2nd.html'>A-305(Gents Toilet)</a>",
    "<a href='2nd.html'>A-306(HOD of CS Department)</a>",
    "<a href='2nd.html'>A-307(Faculty Room)</a>",
    "<a href='2nd.html'>A-308(Computer Lab)</a>",
    "<a href='2nd.html'>A-309(Computer Lab)</a>",
    "<a href='2nd.html'>A-310(Seminar Hall)</a>",
    "<a href='2nd.html'>A-311(Faculty Room)</a>",
    "<a href='2nd.html'>A-312(Faculty Room)</a>",
    "<a href='2nd.html'>A-313(Ladies Toilet)</a>",
    "<a href='2nd.html'>A-314(Classroom)</a>",
    "<a href='2nd.html'>A-315(Classroom)</a>",
    "<a href='2nd.html'>A-316(Classroom)</a>",
    
    "<a href='3rd.html'>A-400(Tutorial Room)</a>",
    "<a href='3rd.html'>A-401(Reasearch Lab ENTC)</a>",
    "<a href='3rd.html'>A-402(Electronic & ckt Lab-II)</a>",
    "<a href='3rd.html'>A-403(Measurement & Power Electronic Lab)</a>",
    "<a href='3rd.html'>A-404(Faculty Room)</a>",
    "<a href='3rd.html'>A-405(Ladies Toilet)</a>",
    "<a href='3rd.html'>A-406(HOD of ENTC Department)</a>",
    "<a href='3rd.html'>A-407</a>",
    "<a href='3rd.html'>A-408(Digital Electronics Lab)</a>",
    "<a href='3rd.html'>A-409(Microcontroller & Embeded Lab)</a>",
    "<a href='3rd.html'>A-410(Classroom)</a>",
    "<a href='3rd.html'>A-411(MCA Admission)</a>",
    "<a href='3rd.html'>A-412(Faculty Room of MCA)</a>",
    "<a href='3rd.html'>A-413(MCA)</a>",
    "<a href='3rd.html'>A-414(Gents Toilet)</a>",
    "<a href='3rd.html'>A-415(Lecture Hall)</a>",
    "<a href='3rd.html'>A-416(Lecture Hall)</a>",
    "<a href='3rd.html'>A-417(Lecture Hall)</a>",
 

  ];
  
  const searchInput = document.getElementById('search');
  const searchWrapper = document.querySelector('.wrapper');
  const resultsWrapper = document.querySelector('.results');
  
  searchInput.addEventListener('keyup', () => {
    let results = [];
    let input = searchInput.value;
    if (input.length) {
      results = searchable.filter((item) => {
        return item.toLowerCase().includes(input.toLowerCase());
      });
    }
    renderResults(results);
  });
  
  function renderResults(results) {
    if (!results.length) {
      return searchWrapper.classList.remove('show');
    }
  
    const content = results
      .map((item) => {
        return `<li><a>${item}</a></li>`;
      })
      .join('');
  
    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
  }
  