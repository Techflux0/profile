 const projects = [
      { 
          name: "React App 1", 
          url: "https://your-react-app-1.vercel.app",
          img: "https://www.jetadmin.io/blog/content/images/2023/03/CRUD-first-header.jpg"
      },
      { 
          name: "React App 2", 
          url: "https://your-react-app-2.vercel.app",
          img: "https://www.jetadmin.io/blog/content/images/2023/03/CRUD-first-header.jpg"
      },
      { 
          name: "React App 3", 
          url: "https://your-react-app-3.vercel.app",
          img: "https://www.jetadmin.io/blog/content/images/2023/03/CRUD-first-header.jpg"
      },
      { 
          name: "React App 4", 
          url: "https://your-react-app-4.vercel.app",
          img: "https://www.jetadmin.io/blog/content/images/2023/03/CRUD-first-header.jpg"
      },
      { 
          name: "React App 5", 
          url: "https://your-react-app-5.vercel.app",
          img: "https://www.jetadmin.io/blog/content/images/2023/03/CRUD-first-header.jpg"
      },
      { 
          name: "React App 6", 
          url: "https://your-react-app-6.vercel.app",
          img: "https://www.jetadmin.io/blog/content/images/2023/03/CRUD-first-header.jpg"
      },
      { 
          name: "React App 7", 
          url: "https://your-react-app-7.vercel.app",
          img: "https://www.jetadmin.io/blog/content/images/2023/03/CRUD-first-header.jpg"
      },
      { 
          name: "React App 8", 
          url: "https://your-react-app-8.vercel.app",
          img: "https://www.jetadmin.io/blog/content/images/2023/03/CRUD-first-header.jpg"
      }
  ];

  const container = document.getElementById('project-list');
  projects.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
          <img src="${proj.img}" alt="${proj.name}" style="width:100%;border-radius:6px 6px 0 0;margin-bottom:12px;">
          <h3>${proj.name}</h3>
          <a class="button" href="${proj.url}" target="_blank">View</a>
      `;
      container.appendChild(card);
  });

  //