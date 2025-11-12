import Edwin from '../../image/Edwin-Tu.jpg'

function Aboutus() {
    return (
        <>
            <div className="section">
                <h1>關於我們</h1>
                <p> 我們是來自澎湖科技大學資訊工程系的一群學生，
                    對程式設計與前端開發充滿熱情。
                    我們相信好的網站，不只是代碼的堆疊，
                    而是結合設計、體驗與技術的整體作品。
                </p>
                <p>
                    從校園專案到實際接案，我們持續打磨實力，
                    將每一次合作視為學習與創造的機會。
                    若你需要的是有想法、有責任感的開發夥伴，
                    我們願意用行動與成果，成為你信任的團隊。
                </p>
            </div>
            <div className="section">
                <div className="card">
                    <div className="card-title">團隊成員</div>
                    <div className="team-intro">
                        <div className="member">
                            <img src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/377a1faf-dbc1-4c17-99de-5a88273cf67c.png" alt="劉興源" className="avatar" />
                            <div className="info">
                                <strong>劉興源</strong>
                                <p>AI助理開發者／Python與智能應用專家，負責架構與工程。</p>
                                <a href="https://bryan-9603012.github.io" className="cta-btn" target="_blank" rel="noopener noreferrer">個人網站</a>
                            </div>
                        </div>
                        <div className="member">
                            <img src="image.jpeg" alt="成員B" className="avatar" />
                            <div className="info">
                                <strong>木偶師</strong>
                                <p>前端設計師，熱愛UI/UX，專長 HTML/CSS 動效。</p>
                                <a href="https://thetimelesspuppeteer.github.io/myself" className="cta-btn" target="_blank" rel="noopener noreferrer">個人網站</a>
                            </div>
                        </div>
                        <div className="member">
                            <img src={Edwin} alt="成員C" className="avatar" />
                            <div className="info">
                                <strong>凃彥任</strong>
                                <p>雲端工程師，擅長伺服器與效能優化，基礎架構主導。</p>
                                <a href="https://edwin-tu.github.io" className="cta-btn" target="_blank" rel="noopener noreferrer">個人網站</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus;