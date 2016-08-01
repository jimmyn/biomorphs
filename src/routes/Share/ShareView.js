import React, {PropTypes, Component} from 'react';
import Biomorph from 'components/Biomorph';
import classNames from './ShareView.scss';

class ShareView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: ''
    };
  }
  componentDidMount() {
    this.setState({src: this.src});
  }
  render() {
    const {genome, generation, selectGenome} = this.props;
    return (
      <section>
        <h2>Your biomorph  (generation {generation})</h2>
        <div className={classNames.container}>
          <Biomorph
            ref={(c) => {
              c && (this.src = c.src);
            }}
            genome={genome}
            onClick={selectGenome}
            size="large" />
        </div>
        <p>
          <a
            href={this.state.src}
            className={classNames.save}
            download="biomorph.png">
            Save
          </a>
        </p>
      </section>
    );
  }
}

ShareView.propTypes = {
  genome: PropTypes.array.isRequired,
  selectGenome: PropTypes.func.isRequired
};

export default ShareView;