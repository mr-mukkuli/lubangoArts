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

    if (nav) {
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
                if (targetId && targetId.startsWith('#')) {
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
    }

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
            image: 'assets/images/dmf.webp',
            link: 'community.html',
            linkText: 'View Community Projects'
        },
        'arushapot': {
            title: 'Arushapot Art School',
            tag: 'Art Education',
            description: 'Developed and implemented art education programs for Arushapot Art School, providing creative direction and curriculum development to nurture emerging artistic talent in Zambia.',
            year: '2020-2021',
            image: 'assets/images/theBorderline.jpg',
            link: 'https://arushapot.com',
            linkText: 'Visit Arushapot'
        },
        'zuba': {
            title: 'Zuba TV Series',
            tag: 'Consultancy',
            description: 'Provided production consultancy for the popular TV series Zuba, working with Elixur Integrated Media Ltd to enhance storytelling and production quality for Zambian audiences.',
            year: '2019-2020',
            image: 'assets/images/mastercook.jpg',
            link: null
        },
        'fashion-week': {
            title: 'Zambia Fashion Week',
            tag: 'Event Coverage',
            description: 'Comprehensive media coverage and content creation for Zambia Fashion Week, capturing runway shows, designer interviews, and behind-the-scenes moments to promote Zambian fashion talent.',
            year: '2018-2019',
            image: 'assets/images/dmf.webp',
            link: null
        },
        'women-awards': {
            title: 'Zambia Women\'s Awards',
            tag: 'Event Coverage',
            description: 'Media production and content creation for the Zambia Women\'s Awards, celebrating and highlighting the achievements of exceptional Zambian women across various sectors.',
            year: '2018-2019',
            image: 'assets/images/dmf.webp',
            link: null
        },
        'theatre-festival': {
            title: 'April Theatre Festival',
            tag: 'Event Coverage',
            description: 'Documented and promoted the April Theatre Festival through multimedia coverage, showcasing Zambian theatrical talent and increasing visibility for the performing arts community.',
            year: '2017-2018',
            image: 'assets/images/theBorderline.jpg',
            link: null
        },
        'wanilata-theme': {
            title: 'Wanilata Theme Song',
            tag: 'Music Production',
            description: 'Produced the captivating theme song for Zambia\'s first reality dating show, Wanilata, creating an audio identity that became synonymous with the popular television program.',
            year: '2021',
            image: 'assets/images/wanilata.jpg',
            link: null
        },
        'love-back-zambia': {
            title: 'Love Back Zambia Theme',
            tag: 'Music Production',
            description: 'Created the memorable theme music for Love Back Zambia, contributing to the show\'s emotional resonance and audience connection through carefully crafted musical composition.',
            year: '2019',
            image: 'assets/images/loveBackZambia.webp',
            link: null
        },
        'mining-indaba': {
            title: 'Zambia Alternative Mining Indaba',
            tag: 'Event Coverage',
            description: 'Comprehensive coverage of the Zambia Alternative Mining Indaba, highlighting discussions on sustainable mining practices and community engagement in the extractive industry.',
            year: '2018',
            image: 'assets/images/mastercook.jpg',
            link: null
        },
        'trust-africa': {
            title: 'Trust Africa Collaboration',
            tag: 'Consultancy',
            description: 'Strategic communication consultancy for Trust Africa, developing advocacy campaigns and communication strategies for pan-African development initiatives.',
            year: '2019',
            image: 'assets/images/masauso.webp',
            link: null
        },
        'aerc': {
            title: 'AERC Research Symposium',
            tag: 'Workshop',
            description: 'Facilitated workshops and produced content for the Africa Economic Research Consortium symposium, translating complex economic research into accessible communication materials.',
            year: '2020',
            image: 'assets/images/theBorderline.jpg',
            link: null
        },
        'tax-justice': {
            title: 'Tax Justice Network Africa',
            tag: 'Advocacy',
            description: 'Developed advocacy communication materials and campaigns for Tax Justice Network Africa, focusing on fair taxation policies and financial transparency across the continent.',
            year: '2021',
            image: 'assets/images/loveGames.jpg',
            link: null
        },
        'action-aid': {
            title: 'Action Aid Zambia',
            tag: 'Social Impact',
            description: 'Collaborated with Action Aid Zambia on social impact campaigns, creating compelling content to raise awareness about poverty, gender equality, and social justice issues.',
            year: '2019-2020',
            image: 'assets/images/dmf.webp',
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
            item.addEventListener('click', function () {
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

    const heroVideo = document.getElementById('heroVideo');
    if (heroVideo) {
        heroVideo.setAttribute('playsinline', '');
        heroVideo.setAttribute('webkit-playsinline', '');
        heroVideo.muted = true;
        
        let videoPlayAttempts = 0;
        const maxAttempts = 5;
        
        function attemptVideoPlay() {
            if (videoPlayAttempts >= maxAttempts) return;
            videoPlayAttempts++;
            
            const playPromise = heroVideo.play();
            if (playPromise !== undefined) {
                playPromise.then(function() {
                }).catch(function(error) {
                    console.log('Video autoplay attempt ' + videoPlayAttempts + ' failed:', error.message);
                    heroVideo.muted = true;
                    
                    if (videoPlayAttempts < maxAttempts) {
                        setTimeout(attemptVideoPlay, 500);
                    }
                });
            }
        }

        heroVideo.addEventListener('canplay', function() {
            attemptVideoPlay();
        }, { once: true });
        
        heroVideo.addEventListener('loadeddata', function() {
            attemptVideoPlay();
        }, { once: true });
        
        heroVideo.addEventListener('loadedmetadata', function() {
            attemptVideoPlay();
        }, { once: true });

        if (heroVideo.readyState >= 2) {
            attemptVideoPlay();
        }

        function playOnInteraction() {
            if (heroVideo.paused) {
                heroVideo.muted = true;
                heroVideo.play().catch(function(e) {
                    console.log('Interaction play failed:', e.message);
                });
            }
        }

        document.addEventListener('click', playOnInteraction, { once: true });
        document.addEventListener('touchstart', playOnInteraction, { once: true, passive: true });
        document.addEventListener('scroll', playOnInteraction, { once: true, passive: true });
        document.addEventListener('mousemove', playOnInteraction, { once: true, passive: true });
        document.addEventListener('keydown', playOnInteraction, { once: true });

        window.addEventListener('focus', function() {
            if (heroVideo.paused) {
                heroVideo.play().catch(function(e) {});
            }
        });

        document.addEventListener('visibilitychange', function() {
            if (!document.hidden && heroVideo.paused) {
                heroVideo.play().catch(function(e) {});
            }
        });
    }

    const companyReel = document.getElementById('companyReel');
    const playBtn = document.getElementById('playBtn');
    const muteBtn = document.getElementById('muteBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');

    if (companyReel && playBtn && muteBtn && fullscreenBtn) {
        const playIconSvg = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
        const pauseIconSvg = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';

        function updatePlayButton() {
            if (companyReel.paused || companyReel.ended) {
                playBtn.innerHTML = playIconSvg;
                playBtn.setAttribute('aria-label', 'Play video');
            } else {
                playBtn.innerHTML = pauseIconSvg;
                playBtn.setAttribute('aria-label', 'Pause video');
            }
        }

        function updateMuteButton() {
            const mutedIcon = muteBtn.querySelector('.muted-icon');
            const unmutedIcon = muteBtn.querySelector('.unmuted-icon');
            
            if (mutedIcon && unmutedIcon) {
                if (companyReel.muted) {
                    mutedIcon.style.display = 'block';
                    unmutedIcon.style.display = 'none';
                    muteBtn.setAttribute('aria-label', 'Unmute video');
                } else {
                    mutedIcon.style.display = 'none';
                    unmutedIcon.style.display = 'block';
                    muteBtn.setAttribute('aria-label', 'Mute video');
                }
            }
        }

        function togglePlay() {
            if (companyReel.paused || companyReel.ended) {
                companyReel.play().catch(function(e) {
                    console.log('Play failed:', e.message);
                });
            } else {
                companyReel.pause();
            }
        }

        function toggleMute() {
            companyReel.muted = !companyReel.muted;
            updateMuteButton();
        }

        playBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            togglePlay();
        });

        companyReel.addEventListener('click', function(e) {
            e.stopPropagation();
            togglePlay();
        });

        companyReel.addEventListener('play', updatePlayButton);
        companyReel.addEventListener('pause', updatePlayButton);
        companyReel.addEventListener('ended', updatePlayButton);
        companyReel.addEventListener('volumechange', updateMuteButton);

        muteBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMute();
        });

        fullscreenBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (companyReel.requestFullscreen) {
                companyReel.requestFullscreen();
            } else if (companyReel.webkitRequestFullscreen) {
                companyReel.webkitRequestFullscreen();
            } else if (companyReel.msRequestFullscreen) {
                companyReel.msRequestFullscreen();
            } else if (companyReel.webkitEnterFullscreen) {
                companyReel.webkitEnterFullscreen();
            } else if (companyReel.mozRequestFullScreen) {
                companyReel.mozRequestFullScreen();
            }
        });

        updatePlayButton();
        updateMuteButton();
    }

    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach(card => {
        const img = card.querySelector('.work-img');

        if (img) {
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

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            formMessage.className = 'form-message success';
            formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            formMessage.style.display = 'block';

            contactForm.reset();

            setTimeout(function () {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }
});
