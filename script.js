document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('.nav');
    const navLinksAnchors = document.querySelectorAll('.nav-link');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        document.addEventListener('click', function (e) {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });

        navLinksAnchors.forEach(link => {
            link.addEventListener('click', function () {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', function () {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }

        lastScrollY = currentScrollY;
    });

    navLinksAnchors.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const navHeight = nav.offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 200) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
    }

    const worksData = {
        'community-work': {
            title: 'Community & Charity Work',
            tag: 'Social Impact',
            description: 'Extensive community engagement and charity initiatives focused on education, women empowerment, and youth development across Zambia. Partnered with local organizations to create sustainable impact.',
            year: '2015-Present',
            image: 'assets/images/dmf_1764166128269.webp',
            link: 'community.html',
            linkText: 'View Community Projects'
        },
        'arushapot': {
            title: 'Arushapot Art School',
            tag: 'Art Education',
            description: 'Developed and implemented art education programs for Arushapot Art School, providing creative direction and curriculum development to nurture emerging artistic talent in Zambia.',
            year: '2020-2021',
            image: 'assets/images/theBorderline_1764166128266.jpg',
            link: 'https://arushapot.com',
            linkText: 'Visit Arushapot'
        },
        'zuba': {
            title: 'Zuba TV Series',
            tag: 'Consultancy',
            description: 'Provided production consultancy for the popular TV series Zuba, working with Elixur Integrated Media Ltd to enhance storytelling and production quality for Zambian audiences.',
            year: '2019-2020',
            image: 'assets/images/mastercook_1764166128265.jpg',
            link: null
        },
        'fashion-week': {
            title: 'Zambia Fashion Week',
            tag: 'Event Coverage',
            description: 'Comprehensive media coverage and content creation for Zambia Fashion Week, capturing runway shows, designer interviews, and behind-the-scenes moments to promote Zambian fashion talent.',
            year: '2018-2019',
            image: 'assets/images/dmf_1764166128269.webp',
            link: null
        },
        'women-awards': {
            title: 'Zambia Women\'s Awards',
            tag: 'Event Coverage',
            description: 'Media production and content creation for the Zambia Women\'s Awards, celebrating and highlighting the achievements of exceptional Zambian women across various sectors.',
            year: '2018-2019',
            image: 'assets/images/dmf_1764166128269.webp',
            link: null
        },
        'theatre-festival': {
            title: 'April Theatre Festival',
            tag: 'Event Coverage',
            description: 'Documented and promoted the April Theatre Festival through multimedia coverage, showcasing Zambian theatrical talent and increasing visibility for the performing arts community.',
            year: '2017-2018',
            image: 'assets/images/theBorderline_1764166128266.jpg',
            link: null
        },
        'wanilata-theme': {
            title: 'Wanilata Theme Song',
            tag: 'Music Production',
            description: 'Produced the captivating theme song for Zambia\'s first reality dating show, Wanilata, creating an audio identity that became synonymous with the popular television program.',
            year: '2021',
            image: 'assets/images/wanilata_1764166128268.jpg',
            link: null
        },
        'love-back-zambia': {
            title: 'Love Back Zambia Theme',
            tag: 'Music Production',
            description: 'Created the memorable theme music for Love Back Zambia, contributing to the show\'s emotional resonance and audience connection through carefully crafted musical composition.',
            year: '2019',
            image: 'assets/images/loveBackZambia_1764166128263.webp',
            link: null
        },
        'mining-indaba': {
            title: 'Zambia Alternative Mining Indaba',
            tag: 'Event Coverage',
            description: 'Comprehensive coverage of the Zambia Alternative Mining Indaba, highlighting discussions on sustainable mining practices and community engagement in the extractive industry.',
            year: '2018',
            image: 'assets/images/mastercook_1764166128265.jpg',
            link: null
        },
        'trust-africa': {
            title: 'Trust Africa Collaboration',
            tag: 'Consultancy',
            description: 'Strategic communication consultancy for Trust Africa, developing advocacy campaigns and communication strategies for pan-African development initiatives.',
            year: '2019',
            image: 'assets/images/masauso_1764166128265.webp',
            link: null
        },
        'aerc': {
            title: 'AERC Research Symposium',
            tag: 'Workshop',
            description: 'Facilitated workshops and produced content for the Africa Economic Research Consortium symposium, translating complex economic research into accessible communication materials.',
            year: '2020',
            image: 'assets/images/theBorderline_1764166128266.jpg',
            link: null
        },
        'tax-justice': {
            title: 'Tax Justice Network Africa',
            tag: 'Advocacy',
            description: 'Developed advocacy communication materials and campaigns for Tax Justice Network Africa, focusing on fair taxation policies and financial transparency across the continent.',
            year: '2021',
            image: 'assets/images/loveGames_1764166128264.jpg',
            link: null
        },
        'action-aid': {
            title: 'Action Aid Zambia',
            tag: 'Social Impact',
            description: 'Collaborated with Action Aid Zambia on social impact campaigns, creating compelling content to raise awareness about poverty, gender equality, and social justice issues.',
            year: '2019-2020',
            image: 'assets/images/dmf_1764166128269.webp',
            link: null
        }
    };

    const workItems = document.querySelectorAll('.work-item');
    const workDisplayImage = document.querySelector('.work-display-image');
    const workDisplayTitle = document.querySelector('.work-display-title');
    const workDisplayTag = document.querySelector('.work-display-tag');
    const workDisplayDescription = document.querySelector('.work-display-description');
    const workDisplayYear = document.querySelector('.work-display-year');
    const workLink = document.querySelector('.work-link');

    if (workItems.length > 0 && workDisplayImage) {
        workItems.forEach(item => {
            item.addEventListener('click', function() {
                workItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                
                const workId = this.getAttribute('data-work');
                const workData = worksData[workId];
                
                if (workData) {
                    workDisplayTitle.textContent = workData.title;
                    workDisplayTag.textContent = workData.tag;
                    workDisplayDescription.textContent = workData.description;
                    workDisplayYear.textContent = workData.year;
                    workDisplayImage.src = workData.image;
                    
                    if (workData.link) {
                        workLink.href = workData.link;
                        workLink.textContent = workData.linkText;
                        workLink.style.display = 'inline-block';
                    } else {
                        workLink.style.display = 'none';
                    }
                }
            });
        });
    }

    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.play().catch(function(error) {
            console.log('Video autoplay was prevented:', error);
        });
    }

    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach(card => {
        const imageWrapper = card.querySelector('.work-image-wrapper');
        const img = card.querySelector('.work-img');

        if (imageWrapper && img) {
            card.addEventListener('mouseenter', function () {
                img.style.transform = 'scale(1.05)';
            });

            card.addEventListener('mouseleave', function () {
                img.style.transform = 'scale(1)';
            });
        }
    });

    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            formMessage.className = 'form-message success';
            formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            formMessage.style.display = 'block';
            
            contactForm.reset();
            
            setTimeout(function() {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }
});
