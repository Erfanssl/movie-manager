import React, { Component } from 'react';
import uuid from 'uuid';
import { toast } from "react-toastify";
import MoviesFormItem from './MoviesFormItem';

class MoviesForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmitDisable = this.onSubmitDisable.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.handleScreenIdea = this.handleScreenIdea.bind(this);
        this.handleScreenCharacter = this.handleScreenCharacter.bind(this);
        this.handleScreenStory = this.handleScreenStory.bind(this);
        this.handleScreenConcept = this.handleScreenConcept.bind(this);
        this.handleScreenDialogue = this.handleScreenDialogue.bind(this);
        this.handleScreenStructure = this.handleScreenStructure.bind(this);
        this.handleDirectorInfluence = this.handleDirectorInfluence.bind(this);
        this.handleDirectorCreativity = this.handleDirectorCreativity.bind(this);
        this.handleDirectorPrinciples = this.handleDirectorPrinciples.bind(this);
        this.handleDirectorConcept = this.handleDirectorConcept.bind(this);
        this.handleDirectorPictures = this.handleDirectorPictures.bind(this);
        this.handleEditConcept = this.handleEditConcept.bind(this);
        this.handleEditPrinciples = this.handleEditPrinciples.bind(this);
        this.handleEditStorytelling = this.handleEditStorytelling.bind(this);
        this.handleEditCreativity = this.handleEditCreativity.bind(this);
        this.handleEditBeauty = this.handleEditBeauty.bind(this);
        this.handlePlaysNaturality = this.handlePlaysNaturality.bind(this);
        this.handlePlaysInfluence = this.handlePlaysInfluence.bind(this);
        this.handlePlaysPrinciples = this.handlePlaysPrinciples.bind(this);
        this.handlePlaysCreativity = this.handlePlaysCreativity.bind(this);
        this.handlePlaysAttentionToDetails = this.handlePlaysAttentionToDetails.bind(this);
        this.handleCinematographyConcept = this.handleCinematographyConcept.bind(this);
        this.handleCinematographyBeauty = this.handleCinematographyBeauty.bind(this);
        this.handleCinematographyMood = this.handleCinematographyMood.bind(this);
        this.handleCinematographyCreativity = this.handleCinematographyCreativity.bind(this);
        this.handleCinematographyPrinciples = this.handleCinematographyPrinciples.bind(this);
        this.handleAnimationCharacterDesign = this.handleAnimationCharacterDesign.bind(this);
        this.handleAnimationCinematography = this.handleAnimationCinematography.bind(this);
        this.handleAnimationFaceAndDressDynamics = this.handleAnimationFaceAndDressDynamics.bind(this);
        this.handleAnimationMotions = this.handleAnimationMotions.bind(this);
        this.handleMusicMood = this.handleMusicMood.bind(this);
        this.handleMusicBeauty = this.handleMusicBeauty.bind(this);
        this.handleMusicInfluence = this.handleMusicInfluence.bind(this);
        this.handleMusicConcept = this.handleMusicConcept.bind(this);
        this.handleOtherCostumeDesign = this.handleOtherCostumeDesign.bind(this);
        this.handleOtherActorSelecting = this.handleOtherActorSelecting.bind(this);
        this.handleOtherSound = this.handleOtherSound.bind(this);
        this.handleOtherSpecialEffects = this.handleOtherSpecialEffects.bind(this);
        this.handleOtherMakeUp = this.handleOtherMakeUp.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleIMDB = this.handleIMDB.bind(this);
        this.calculateMyRating = this.calculateMyRating.bind(this);
        this.calculateType = this.calculateType.bind(this);
        this.handleHandles = this.handleHandles.bind(this);
        this.state = {
            id: uuid(),
            title: {
                val: '',
                valid: false
            },
            IMDB: {
                val: '',
                valid: false
            },
            screenplay: {
                idea: {
                    val: '',
                    valid: false
                },
                character: {
                    val: '',
                    valid: false
                },
                story: {
                    val: '',
                    valid: false
                },
                concept: {
                    val: '',
                    valid: false
                },
                dialogue: {
                    val: '',
                    valid: false
                },
                structure: {
                    val: '',
                    valid: false
                }
            },
            director: {
                influence: {
                    val: '',
                    valid: false
                },
                creativity: {
                    val: '',
                    valid: false
                },
                principles: {
                    val: '',
                    valid: false
                },
                concept: {
                    val: '',
                    valid: false
                },
                pictures: {
                    val: '',
                    valid: false
                }
            },
            edit: {
                concept: {
                    val: '',
                    valid: false
                },
                principles: {
                    val: '',
                    valid: false
                },
                storytelling: {
                    val: '',
                    valid: false
                },
                creativity: {
                    val: '',
                    valid: false
                },
                beauty: {
                    val: '',
                    valid: false
                }
            },
            plays: {
                naturality: {
                    val: '',
                    valid: false
                },
                influence: {
                    val: '',
                    valid: false
                },
                principles: {
                    val: '',
                    valid: false
                },
                creativity: {
                    val: '',
                    valid: false
                },
                attentionToDetails: {
                    val: '',
                    valid: false
                }
            },
            cinematography: {
                concept: {
                    val: '',
                    valid: false
                },
                beauty: {
                    val: '',
                    valid: false
                },
                mood: {
                    val: '',
                    valid: false
                },
                creativity: {
                    val: '',
                    valid: false
                },
                principles: {
                    val: '',
                    valid: false
                }
            },
            music: {
                mood: {
                    val: '',
                    valid: false
                },
                beauty: {
                    val: '',
                    valid: false
                },
                influence: {
                    val: '',
                    valid: false
                },
                concept: {
                    val: '',
                    valid: false
                }
            },
            other: {
                costumeDesign: {
                    val: '',
                    valid: false
                },
                actorSelecting: {
                    val: '',
                    valid: false
                },
                sound: {
                    val: '',
                    valid: false
                },
                specialEffects: {
                    val: '',
                    valid: false
                },
                makeUp: {
                    val: '',
                    valid: false
                }
            },
            animation: {
                characterDesign: {
                    val: '',
                    valid: false
                },
                cinematography: {
                    val: '',
                    valid: false
                },
                faceAndDressDynamics: {
                    val: '',
                    valid: false
                },
                motions: {
                    val: '',
                    valid: false
                }
            },
            checked: false,
            myRating: '',
            type: ''
        };
    }

    componentDidUpdate() {
        this.onSubmitDisable();
    }

    onSubmitDisable() {
        const { title, IMDB, screenplay, director, edit, plays, cinematography, animation, music, other } = this.state;
        const submit = document.querySelector('.movies__submit');
        let isEnable;
        if (!this.state.checked) {
            isEnable = title.valid && IMDB.valid && screenplay.idea.valid && screenplay.character.valid && screenplay.story.valid && screenplay.concept.valid && screenplay.dialogue.valid && screenplay.structure.valid && director.influence.valid && director.creativity.valid && director.principles.valid && director.concept.valid && director.pictures.valid && edit.concept.valid && edit.principles.valid && edit.storytelling.valid && edit.creativity.valid && edit.beauty.valid && plays.naturality.valid &&  plays.influence.valid &&  plays.principles.valid &&  plays.creativity.valid &&  plays.attentionToDetails.valid && cinematography.concept.valid && cinematography.beauty.valid && cinematography.mood.valid && cinematography.creativity.valid && cinematography.principles.valid && music.mood.valid && music.beauty.valid && music.influence.valid && music.concept.valid && other.costumeDesign.valid && other.actorSelecting.valid && other.sound.valid && other.specialEffects.valid && other.makeUp.valid;
        } else if (this.state.checked) {
            isEnable = title.valid && IMDB.valid && screenplay.idea.valid && screenplay.character.valid && screenplay.story.valid && screenplay.concept.valid && screenplay.dialogue.valid && screenplay.structure.valid && director.influence.valid && director.creativity.valid && director.principles.valid && director.concept.valid && director.pictures.valid && edit.concept.valid && edit.principles.valid && edit.storytelling.valid && edit.creativity.valid && edit.beauty.valid && plays.naturality.valid &&  plays.influence.valid &&  plays.principles.valid &&  plays.creativity.valid &&  plays.attentionToDetails.valid && animation.characterDesign.valid && animation.cinematography.valid && animation.faceAndDressDynamics.valid && animation.motions.valid && music.mood.valid && music.beauty.valid && music.influence.valid && music.concept.valid && other.costumeDesign.valid && other.actorSelecting.valid && other.sound.valid && other.specialEffects.valid && other.makeUp.valid;
        }
        if (isEnable) {
            submit.removeAttribute('disabled');
        } else {
            submit.setAttribute('disabled', 'true');
        }
    }

    handleForm(e) {
        e.preventDefault();
        this.state.myRating = this.calculateMyRating();
        this.state.type = this.calculateType();
        const prevData = localStorage.getItem('Movie Manager');
        if (prevData) {
            const parsedData = JSON.parse(prevData);
            if (parsedData.db) {
                const doesExist = parsedData.db.find((item => item.title.val.toLowerCase() === this.state.title.val.toLowerCase()));
                if (doesExist) {
                    document.querySelector('.exist-error').classList.add('d-flex');
                    return;
                }
                const newData = {};
                Object.assign(newData, parsedData);
                newData.db = [ ...parsedData.db, this.state ];
                newData.db.sort((a,b) => b.myRating - a.myRating);
                localStorage.setItem('Movie Manager', JSON.stringify(newData));
            } else {
                const data = {};
                Object.assign(data, parsedData);
                data.db = [this.state];
                localStorage.setItem('Movie Manager', JSON.stringify(data));
            }
        } else {
            const data = { db: [this.state] };
            localStorage.setItem('Movie Manager', JSON.stringify(data));
        }
        toast.success('You successfully added a new movie!');
        this.props.history.push('/movies');
    }

    calculateMyRating() {
        const num = num => parseFloat(num);
        let myRating;
        const {screenplay: sp, director: d, edit: e, plays: p, cinematography: c, music: m, other: o, animation: a} = this.state;
        if (this.state.checked) {
            myRating =
                (((num(sp.idea.val) + num(sp.character.val) + num(sp.story.val) + num(sp.concept.val) + num(sp.dialogue.val) + num(sp.structure.val)) * 3)
                    + ((num(d.influence.val) + num(d.creativity.val) + num(d.principles.val) + num(d.concept.val) + num(d.pictures.val)) * 4)
                    + ((num(e.concept.val) + num(e.principles.val) + num(e.storytelling.val) + num(e.creativity.val) + num(e.beauty.val)) * 2)
                    + ((num(p.naturality.val) + num(p.influence.val) + num(p.principles.val) + num(p.creativity.val) + num(p.attentionToDetails.val)) * 2)
                    + ((num(a.characterDesign.val) + num(a.cinematography.val) + num(a.faceAndDressDynamics.val) + num(a.motions.val)) * 4)
                    + ((num(m.mood.val) + num(m.beauty.val) + num(m.influence.val) + num(m.concept.val)) * 2)
                    + (num(o.costumeDesign.val) + num(o.actorSelecting.val) + num(o.sound.val) + num(o.specialEffects.val) + num(o.makeUp.val) * 1)) / 18
        } else {
            myRating =
                (((num(sp.idea.val) + num(sp.character.val) + num(sp.story.val) + num(sp.concept.val) + num(sp.dialogue.val) + num(sp.structure.val)) * 3)
                    + ((num(d.influence.val) + num(d.creativity.val) + num(d.principles.val) + num(d.concept.val) + num(d.pictures.val)) * 4)
                    + ((num(e.concept.val) + num(e.principles.val) + num(e.storytelling.val) + num(e.creativity.val) + num(e.beauty.val)) * 2)
                    + ((num(p.naturality.val) + num(p.influence.val) + num(p.principles.val) + num(p.creativity.val) + num(p.attentionToDetails.val)) * 2)
                    + ((num(c.concept.val) + num(c.beauty.val) + num(c.mood.val) + num(c.creativity.val) + num(c.principles.val)) * 2)
                    + ((num(m.mood.val) + num(m.beauty.val) + num(m.influence.val) + num(m.concept.val)) * 2)
                    + (num(o.costumeDesign.val) + num(o.actorSelecting.val) + num(o.sound.val) + num(o.specialEffects.val) + num(o.makeUp.val) * 1)) / 16;
        }
        const ultimateRating = myRating.toFixed(1);
        if (ultimateRating.match(/^\d+\.0$/)) {
            return parseInt(ultimateRating);
        } else {
            return ultimateRating;
        }
    }

    calculateType() {
        const rating = this.calculateMyRating();
        if (rating >= 0 && rating <= 2.5 ) return 'W';
        else if (rating >= 2.6 && rating <= 4.5) return 'B';
        else if (rating >= 4.6 && rating <= 5.5) return 'BbW';
        else if (rating >= 5.6 && rating <= 6.5) return 'NGbR';
        else if (rating >= 6.6 && rating <= 7) return 'G';
        else if (rating >= 7.1 && rating <= 7.5) return 'VG';
        else if (rating >= 7.6 && rating <= 7.9) return 'E';
        else if (rating >= 8 && rating <= 8.5) return 'M';
        else if (rating >= 8.6 && rating <= 10) return 'L';
    }

    handleCheckbox() {
        const animationText = document.querySelector('.animation-text');
        const animationContainer = document.querySelector('.animation-container');
        const cinematographyText = document.querySelector('.cinematography-text');
        const cinematographyContainer = document.querySelector('.cinematography-container');
        animationContainer.classList.toggle('d-none');
        animationText.classList.toggle('d-none');
        cinematographyText.classList.toggle('d-none');
        cinematographyContainer.classList.toggle('d-none');
        this.setState((prevState) => ({
            checked: !prevState.checked
        }))
    }


    handleHandles(event, limit, id, statePart, nestedState) {
        let limitUltimate;
        if (limit === 1) limitUltimate = /^(?:1|0|0?\.[0-9]?[0-9]?)$/;
        else if (limit === 1.5) limitUltimate = /^(?:0|1|(?:1\.(?:[0-4]?[0-9]?|5?0?)|0?\.[0-9]?[0-9]?))$/;
        else if (limit === 2) limitUltimate = /^(?=\.?\d)(?:2|(?:(?:0?|1)(?:\.[0-9]?[0-9]?)?))$/;
        else if (limit === 3) limitUltimate = /^(?=\.?\d)(?:3|(?:(?:0?|1|2)(?:\.[0-9]?[0-9]?)?))$/;
        else if (limit === 4) limitUltimate = /^(?=\.?\d)(?:4|(?:(?:0?|1|2|3)(?:\.[0-9]?[0-9]?)?))$/;

        const el = event.target.value;
        if (el.match(limitUltimate)) {
            document.getElementById(`movies-form__${ id }`).classList.remove('bg-danger');
            this.setState((prevState) => {
                const newState = {};
                Object.assign(newState, prevState);
                newState[statePart][nestedState]['val'] = el;
                newState[statePart][nestedState]['valid'] = true;
                return newState;
            });
        } else {
            document.getElementById(`movies-form__${ id }`).classList.add('bg-danger');
            this.setState((prevState) => {
                const newState = {};
                Object.assign(newState, prevState);
                newState[statePart][nestedState]['val'] = el;
                newState[statePart][nestedState]['valid'] = false;
                return newState;
            });
        }
    }

    handleScreenIdea(e) {
        this.handleHandles(e, 2, 'screen--idea', 'screenplay', 'idea');
    }

    handleScreenCharacter(e) {
        this.handleHandles(e, 1.5, 'screen--character', 'screenplay', 'character');
    }

    handleScreenStory(e) {
        this.handleHandles(e, 2, 'screen--story', 'screenplay', 'story');
    }

    handleScreenConcept(e) {
        this.handleHandles(e, 1.5, 'screen--concept', 'screenplay', 'concept');
    }

    handleScreenDialogue(e) {
        this.handleHandles(e, 1, 'screen--dialogue', 'screenplay', 'dialogue');
    }

    handleScreenStructure(e) {
        this.handleHandles(e, 2, 'screen--structure', 'screenplay', 'structure');
    }

    handleDirectorInfluence(e) {
        this.handleHandles(e, 3, 'director--influence', 'director', 'influence');
    }

    handleDirectorCreativity(e) {
        this.handleHandles(e, 2, 'director--creativity', 'director', 'creativity');
    }

    handleDirectorPrinciples(e) {
        this.handleHandles(e, 2, 'director--principles', 'director', 'principles');
    }

    handleDirectorConcept(e) {
        this.handleHandles(e, 2, 'director--concept', 'director', 'concept');
    }

    handleDirectorPictures(e) {
        this.handleHandles(e, 1, 'director--pictures', 'director', 'pictures');
    }

    handleEditConcept(e) {
        this.handleHandles(e, 2, 'edit--concept', 'edit', 'concept');
    }

    handleEditPrinciples(e) {
        this.handleHandles(e, 2, 'edit--principles', 'edit', 'principles');
    }

    handleEditStorytelling(e) {
        this.handleHandles(e, 3, 'edit--storytelling', 'edit', 'storytelling');
    }

    handleEditCreativity(e) {
        this.handleHandles(e, 2, 'edit--creativity', 'edit', 'creativity');
    }

    handleEditBeauty(e) {
        this.handleHandles(e, 1, 'edit--beauty', 'edit', 'beauty');
    }

    handlePlaysNaturality(e) {
        this.handleHandles(e, 1, 'plays--naturality', 'plays', 'naturality');
    }

    handlePlaysInfluence(e) {
        this.handleHandles(e, 2, 'plays--influence', 'plays', 'influence');
    }

    handlePlaysPrinciples(e) {
        this.handleHandles(e, 3, 'plays--principles', 'plays', 'principles');
    }

    handlePlaysCreativity(e) {
        this.handleHandles(e, 2, 'plays--creativity', 'plays', 'creativity');
    }

    handlePlaysAttentionToDetails(e) {
        this.handleHandles(e, 2, 'plays--details-caring', 'plays', 'attentionToDetails');
    }

    handleCinematographyConcept(e) {
        this.handleHandles(e, 2, 'cinematography--concept', 'cinematography', 'concept');
    }

    handleCinematographyBeauty(e) {
        this.handleHandles(e, 2, 'cinematography--beauty', 'cinematography', 'beauty');
    }

    handleCinematographyMood(e) {
        this.handleHandles(e, 3, 'cinematography--mood', 'cinematography', 'mood');
    }

    handleCinematographyCreativity(e) {
        this.handleHandles(e, 1.5, 'cinematography--creativity', 'cinematography', 'creativity');
    }

    handleCinematographyPrinciples(e) {
        this.handleHandles(e, 1.5, 'cinematography--principles', 'cinematography', 'principles');
    }

    handleAnimationCharacterDesign(e) {
        this.handleHandles(e, 2, 'animation--character-design', 'animation', 'characterDesign');
    }

    handleAnimationCinematography(e) {
        this.handleHandles(e, 4, 'animation--cinematography', 'animation', 'cinematography');
    }

    handleAnimationFaceAndDressDynamics(e) {
        this.handleHandles(e, 2, 'animation--face-and-dress-dynamics', 'animation', 'faceAndDressDynamics');
    }

    handleAnimationMotions(e) {
        this.handleHandles(e, 2, 'animation--motions', 'animation', 'motions');
    }

    handleMusicMood(e) {
        this.handleHandles(e, 3, 'music--mood', 'music', 'mood');
    }

    handleMusicBeauty(e) {
        this.handleHandles(e, 2, 'music--beauty', 'music', 'beauty');
    }

    handleMusicInfluence(e) {
        this.handleHandles(e, 3, 'music--influence', 'music', 'influence');
    }

    handleMusicConcept(e) {
        this.handleHandles(e, 2, 'music--concept', 'music', 'concept');
    }

    handleOtherCostumeDesign(e) {
        this.handleHandles(e, 2, 'other--costume-design', 'other', 'costumeDesign');
    }

    handleOtherActorSelecting(e) {
        this.handleHandles(e, 2, 'other--actor-selecting', 'other', 'actorSelecting');
    }

    handleOtherSound(e) {
        this.handleHandles(e, 2, 'other--sound', 'other', 'sound');
    }

    handleOtherSpecialEffects(e) {
        this.handleHandles(e, 2, 'other--special-effects', 'other', 'specialEffects');
    }

    handleOtherMakeUp(e) {
        this.handleHandles(e, 2, 'other--make-up', 'other', 'makeUp');
    }

    handleTitle(e) {
        const el = e.target;
        if (el.value === '') {
            el.classList.add('bg-danger');
            this.setState((prevState) => {
                const newState = {};
                Object.assign(newState, prevState);
                newState.title.val = el.value;
                newState.title.valid = false;
                return newState;
            });
        } else {
            el.classList.remove('bg-danger');
            this.setState((prevState) => {
                const newState = {};
                Object.assign(newState, prevState);
                newState.title.val = el.value;
                newState.title.valid = true;
                return newState;
            });
        }
        document.querySelector('.exist-error').classList.remove('d-flex');
    }

    handleIMDB(e) {
        const el = e.target;
        if (el.value === '') {
            el.classList.add('bg-danger');
            this.setState((prevState) => {
                const newState = {};
                Object.assign(newState, prevState);
                newState.IMDB.val = el.value;
                newState.IMDB.valid = false;
                return newState;
            });
        } else {
            el.classList.remove('bg-danger');
            this.setState((prevState) => {
                const newState = {};
                Object.assign(newState, prevState);
                newState.IMDB.val = el.value;
                newState.IMDB.valid = true;
                return newState;
            });
        }
    }

    render() {
        return (
            <form onSubmit={ this.handleForm }>
                <div className="form-group bg-glass py-2 px-4 mt-2 container">
                    <div className="mid">
                        <label className="rocker">
                            <input onChange={ this.handleCheckbox } type="checkbox"/>
                            <span className="switch-left">
                                <span className="switch-text__left">Animation</span>
                            </span>
                            <span className="switch-right">
                                <span className="switch-text__right">Movie</span>
                            </span>
                        </label>
                    </div>
                    <div className="text-center row">
                        <div className="col-8 col-md-10">
                            <label htmlFor="movies-title">Title:</label>
                            <input onChange={ this.handleTitle } id="movies-title" className="form-control" type="text" value={ this.state.title.val }/>
                        </div>
                        <div className="col-4 col-md-2">
                            <label htmlFor="movies-imdb">IMDB:</label>
                            <input onChange={ this.handleIMDB } id="movies-imdb" className="form-control text-center" type="text" value={ this.state.IMDB.val }/>
                            <small>Enter the IMDB rating</small>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-center badge badge-primary badge-pill py-2 px-5">Screenplay:</p>
                    </div>
                    <div className="row">
                        <MoviesFormItem
                            label="Idea:"
                            id="movies-form__screen--idea"
                            small="0 to 2"
                            value={ this.state.screenplay.idea.val }
                            onDataChange={ this.handleScreenIdea }
                        />
                        <MoviesFormItem
                            label="Character:"
                            id="movies-form__screen--character"
                            small="0 to 1.5"
                            value={ this.state.screenplay.character.val }
                            onDataChange={ this.handleScreenCharacter }
                        />
                        <MoviesFormItem
                            label="Story:"
                            id="movies-form__screen--story"
                            small="0 to 2"
                            value={ this.state.screenplay.story.val }
                            onDataChange={ this.handleScreenStory }
                        />
                        <MoviesFormItem
                            label="Concept:"
                            id="movies-form__screen--concept"
                            small="0 to 1.5"
                            value={ this.state.screenplay.concept.val }
                            onDataChange={ this.handleScreenConcept }
                        />
                        <MoviesFormItem
                            label="Dialogue:"
                            id="movies-form__screen--dialogue"
                            small="0 to 1"
                            value={ this.state.screenplay.dialogue.val }
                            onDataChange={ this.handleScreenDialogue }
                        />
                        <MoviesFormItem
                            label="Structure:"
                            id="movies-form__screen--structure"
                            small="0 to 2"
                            value={ this.state.screenplay.structure.val }
                            onDataChange={ this.handleScreenStructure }
                        />
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-center badge badge-primary badge-pill py-2 px-5">Director:</p>
                    </div>
                    <div className="row">
                        <MoviesFormItem
                            label="Influence:"
                            id="movies-form__director--influence"
                            small="0 to 3"
                            value={ this.state.director.influence.val }
                            onDataChange={ this.handleDirectorInfluence }
                        />
                        <MoviesFormItem
                            label="Creativity:"
                            id="movies-form__director--creativity"
                            small="0 to 2"
                            value={ this.state.director.creativity.val }
                            onDataChange={ this.handleDirectorCreativity }
                        />
                        <MoviesFormItem
                            label="Principles:"
                            id="movies-form__director--principles"
                            small="0 to 2"
                            value={ this.state.director.principles.val }
                            onDataChange={ this.handleDirectorPrinciples }
                        />
                        <MoviesFormItem
                            label="Concept:"
                            id="movies-form__director--concept"
                            small="0 to 2"
                            value={ this.state.director.concept.val }
                            onDataChange={ this.handleDirectorConcept }
                        />
                        <MoviesFormItem
                            label="Pictures:"
                            id="movies-form__director--pictures"
                            small="0 to 1"
                            value={ this.state.director.pictures.val }
                            onDataChange={ this.handleDirectorPictures }
                        />
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-center badge badge-primary badge-pill py-2 px-5">Edit:</p>
                    </div>
                    <div className="row">
                        <MoviesFormItem
                            label="Concept:"
                            id="movies-form__edit--concept"
                            small="0 to 2"
                            value={ this.state.edit.concept.val }
                            onDataChange={ this.handleEditConcept }
                        />
                        <MoviesFormItem
                            label="Principles:"
                            id="movies-form__edit--principles"
                            small="0 to 2"
                            value={ this.state.edit.principles.val }
                            onDataChange={ this.handleEditPrinciples }
                        />
                        <MoviesFormItem
                            label="Storytelling:"
                            id="movies-form__edit--storytelling"
                            small="0 to 3"
                            value={ this.state.edit.storytelling.val }
                            onDataChange={ this.handleEditStorytelling }
                        />
                        <MoviesFormItem
                            label="Creativity:"
                            id="movies-form__edit--creativity"
                            small="0 to 2"
                            value={ this.state.edit.creativity.val }
                            onDataChange={ this.handleEditCreativity }
                        />
                        <MoviesFormItem
                            label="Beauty:"
                            id="movies-form__edit--beauty"
                            small="0 to 1"
                            value={ this.state.edit.beauty.val }
                            onDataChange={ this.handleEditBeauty }
                        />
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-center badge badge-primary badge-pill py-2 px-5">Plays:</p>
                    </div>
                    <div className="row">
                        <MoviesFormItem
                            label="Naturality:"
                            id="movies-form__plays--naturality"
                            small="0 to 1"
                            value={ this.state.plays.naturality.val }
                            onDataChange={ this.handlePlaysNaturality }
                        />
                        <MoviesFormItem
                            label="Influence:"
                            id="movies-form__plays--influence"
                            small="0 to 2"
                            value={ this.state.plays.influence.val }
                            onDataChange={ this.handlePlaysInfluence }
                        />
                        <MoviesFormItem
                            label="Principles:"
                            id="movies-form__plays--principles"
                            small="0 to 3"
                            value={ this.state.plays.principles.val }
                            onDataChange={ this.handlePlaysPrinciples }
                        />
                        <MoviesFormItem
                            label="Creativity:"
                            id="movies-form__plays--creativity"
                            small="0 to 2"
                            value={ this.state.plays.creativity.val }
                            onDataChange={ this.handlePlaysCreativity }
                        />
                        <MoviesFormItem
                            label="Details Caring:"
                            id="movies-form__plays--details-caring"
                            small="0 to 2"
                            value={ this.state.plays.attentionToDetails.val }
                            onDataChange={ this.handlePlaysAttentionToDetails }
                        />
                    </div>
                    <div className="cinematography-text text-center mt-4">
                        <p className="text-center badge badge-primary badge-pill py-2 px-5">Cinematography:</p>
                    </div>
                    <div className="row cinematography-container">
                        <MoviesFormItem
                            label="Concept:"
                            id="movies-form__cinematography--concept"
                            small="0 to 2"
                            value={ this.state.cinematography.concept.val }
                            onDataChange={ this.handleCinematographyConcept }
                        />
                        <MoviesFormItem
                            label="Beauty:"
                            id="movies-form__cinematography--beauty"
                            small="0 to 2"
                            value={ this.state.cinematography.beauty.val }
                            onDataChange={ this.handleCinematographyBeauty }
                        />
                        <MoviesFormItem
                            label="Mood:"
                            id="movies-form__cinematography--mood"
                            small="0 to 3"
                            value={ this.state.cinematography.mood.val }
                            onDataChange={ this.handleCinematographyMood }
                        />
                        <MoviesFormItem
                            label="Creativity:"
                            id="movies-form__cinematography--creativity"
                            small="0 to 1.5"
                            value={ this.state.cinematography.creativity.val }
                            onDataChange={ this.handleCinematographyCreativity }
                        />
                        <MoviesFormItem
                            label="Principles:"
                            id="movies-form__cinematography--principles"
                            small="0 to 1.5"
                            value={ this.state.cinematography.principles.val }
                            onDataChange={ this.handleCinematographyPrinciples }
                        />
                    </div>
                    <div className="animation-text text-center d-none mt-4">
                        <p className="text-center badge badge-primary badge-pill py-2 px-5">Animation:</p>
                    </div>
                    <div className="row animation-container d-none">
                        <MoviesFormItem
                            label="Character Design:"
                            id="movies-form__animation--character-design"
                            small="0 to 2"
                            value={ this.state.animation.characterDesign.val }
                            onDataChange={ this.handleAnimationCharacterDesign }
                        />
                        <MoviesFormItem
                            label="Cinematography:"
                            id="movies-form__animation--cinematography"
                            small="0 to 4"
                            value={ this.state.animation.cinematography.val }
                            onDataChange={ this.handleAnimationCinematography }
                        />
                        <MoviesFormItem
                            label="F & D Dynamics:"
                            id="movies-form__animation--face-and-dress-dynamics"
                            small="0 to 2"
                            value={ this.state.animation.faceAndDressDynamics.val }
                            onDataChange={ this.handleAnimationFaceAndDressDynamics }
                        />
                        <MoviesFormItem
                            label="Motions:"
                            id="movies-form__animation--motions"
                            small="0 to 2"
                            value={ this.state.animation.motions.val }
                            onDataChange={ this.handleAnimationMotions }
                        />
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-center badge badge-primary badge-pill py-2 px-5">Music:</p>
                    </div>
                    <div className="row">
                        <MoviesFormItem
                            label="Mood:"
                            id="movies-form__music--mood"
                            small="0 to 3"
                            value={ this.state.music.mood.val }
                            onDataChange={ this.handleMusicMood }
                        />
                        <MoviesFormItem
                            label="Beauty:"
                            id="movies-form__music--beauty"
                            small="0 to 2"
                            value={ this.state.music.beauty.val }
                            onDataChange={ this.handleMusicBeauty }
                        />
                        <MoviesFormItem
                            label="Influence:"
                            id="movies-form__music--influence"
                            small="0 to 3"
                            value={ this.state.music.influence.val }
                            onDataChange={ this.handleMusicInfluence }
                        />
                        <MoviesFormItem
                            label="Concept:"
                            id="movies-form__music--concept"
                            small="0 to 2"
                            value={ this.state.music.concept.val }
                            onDataChange={ this.handleMusicConcept }
                        />
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-center badge badge-primary badge-pill py-2 px-5">Other:</p>
                    </div>
                    <div className="row">
                        <MoviesFormItem
                            label="Costume Design:"
                            id="movies-form__other--costume-design"
                            small="0 to 2"
                            value={ this.state.other.costumeDesign.val }
                            onDataChange={ this.handleOtherCostumeDesign }
                        />
                        <MoviesFormItem
                            label="Actor Selecting:"
                            id="movies-form__other--actor-selecting"
                            small="0 to 2"
                            value={ this.state.other.actorSelecting.val }
                            onDataChange={ this.handleOtherActorSelecting }
                        />
                        <MoviesFormItem
                            label="Sound:"
                            id="movies-form__other--sound"
                            small="0 to 2"
                            value={ this.state.other.sound.val }
                            onDataChange={ this.handleOtherSound }
                        />
                        <MoviesFormItem
                            label="Special Effects:"
                            id="movies-form__other--special-effects"
                            small="0 to 2"
                            value={ this.state.other.specialEffects.val }
                            onDataChange={ this.handleOtherSpecialEffects }
                        />
                        <MoviesFormItem
                            label="Make Up:"
                            id="movies-form__other--make-up"
                            small="0 to 2"
                            value={ this.state.other.makeUp.val }
                            onDataChange={ this.handleOtherMakeUp }
                        />
                    </div>
                    <div className="exist-error border border-danger rounded-lg pt-3 d-none my-3 align-items-center justify-content-center">
                        <p>
                            This movie is already exist in your "Movie Database".
                        </p>
                    </div>
                    <button className="btn btn-success form-control mt-3 movies__submit py-1 pb-3" disabled>Submit</button>
                </div>
            </form>
        );
    }
}

export default MoviesForm;