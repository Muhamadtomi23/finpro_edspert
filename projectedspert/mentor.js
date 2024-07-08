//   Function untuk product card mentor
const mentors = [
    {
      image: 'assets/mentor1.jpg',
      nama: 'Abdul',
      job: 'Front end developer',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque minima rem inventore tempora consectetur deleniti unde.'
    },
    {
      image: 'assets/mentor1.jpg',
      nama: 'Abdul',
      job: 'Front end developer',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque minima rem inventore tempora consectetur deleniti unde.'
    },
    {
      image: 'assets/mentor1.jpg',
      nama: 'Abdul',
      job: 'Front end developer',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque minima rem inventore tempora consectetur deleniti unde.'
    },
    {
      image: 'assets/mentor1.jpg',
      nama: 'Abdul',
      job: 'Front end developer',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque minima rem inventore tempora consectetur deleniti unde.'
    },
    {
      image: 'assets/mentor1.jpg',
      nama: 'Abdul',
      job: 'Front end developer',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque minima rem inventore tempora consectetur deleniti unde.'
    },
    {
      image: 'assets/mentor1.jpg',
      nama: 'Abdul',
      job: 'Front end developer',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque minima rem inventore tempora consectetur deleniti unde.'
    },
    {
      image: 'assets/mentor1.jpg',
      nama: 'Abdul',
      job: 'Front end developer',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque minima rem inventore tempora consectetur deleniti unde.'
    },
    {
      image: 'assets/mentor1.jpg',
      nama: 'Abdul',
      job: 'Front end developer',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque minima rem inventore tempora consectetur deleniti unde.'
    },

  ];
  function renderMentorCards() {
    const mentorListDiv = document.getElementById('mentor-list');
    mentorListDiv.innerHTML = '';
    mentors.forEach(mentor => {
      const CardMentor = `
        <div class="card border border-0 mb-2  col-lg-3">
          <div class="card-body text-center">
            <img src="${mentor.image}" alt="" class="card-img-top mb-3">
            <h5 class="card-title">${mentor.nama}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${mentor.job}</h6>
            <p class="card-text">${mentor.desc}</p>
            <a href="#" class="card-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp text-success" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
              </svg></a>
            <a href="#" class="card-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook text-primary" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </svg></a>
            <a href="#" class="card-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter text-primary" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.141 0-.282-.006-.423A6.676 6.676 0 0 0 16 3.542a6.518 6.518 0 0 1-1.889.518 3.293 3.293 0 0 0 1.443-1.816 6.533 6.533 0 0 1-2.08.794A3.283 3.283 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.283 3.283 0 0 0 1.018 4.382 3.27 3.27 0 0 1-1.487-.41v.041c0 1.588 1.13 2.917 2.633 3.218a3.283 3.283 0 0 1-1.482.056 3.287 3.287 0 0 0 3.065 2.278A6.588 6.588 0 0 1 0 13.407a9.29 9.29 0 0 0 5.031 1.475"/>
            </svg></a>
          </div>
        </div>`;
      mentorListDiv.innerHTML += CardMentor;
    });
  }
  window.onload = renderMentorCards;