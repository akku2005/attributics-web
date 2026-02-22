import './scroll.css';

export default function LeadershipTeam({teamMembers}) {
    return (
        <>
            <section className="lt-section">
                <div className="lt-inner">
                    <div className="lt-cards">
                        {teamMembers.map((member) => (
                            <div className="lt-card" key={member.id}>
                                {/* Hover overlay */}
                                <div className="lt-tooltip">
                                    <p className="content-description" style={{textAlign: 'center'}}>{member.bio}</p>
                                </div>

                                <div className="lt-card-header">
                                    <div className="lt-name">{member.name.split(' ')[0]}<br />{member.name.split(' ')[1]}</div>
                                    <div className="lt-title">{member.role.split(' ')[0]}<br />{member.role.split(' ')[1]}</div>
                                </div>

                                <div className="lt-image-wrap">
                                    <img
                                        className="lt-image"
                                        src={member.img}
                                        alt={member.name}
                                        loading='lazy'
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}