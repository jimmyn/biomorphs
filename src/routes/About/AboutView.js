import React from 'react';
import classNames from './AboutView.scss';

const AboutView = () => (
  <section className={classNames.container}>
    <h1 className={classNames.header}>Biomorphs</h1>
    <p>
      Biomorphs are virtual entities that were devised by <a href="http://www.richarddawkins.net/" target="_blank">
      Richard Dawkins</a> in his book <a
      href="http://www.amazon.com/The-Blind-Watchmaker-Evidence-Evolution/dp/0393315703"
      target="_blank">The Blind Watchmaker</a> as a way to visualize the power of evolution.
    </p>
    <p>
      In this implementation there are 11 biomorphs: 1 parent in the center and its 10 children surrounding it. The
      descendant's genes are identical to it's parent's genes except for a single mutation which changes it's appearance
      slightly. You can select which child you want to become the parent in the next generation by clicking on it. By
      repeating this process, you can see how the biomorphs evolve over time.
    </p>
    <p>
      The appearance of each biomorph is determined by 10 genes. Those genes determine width, height, angles, color
      e.t.c. These 10 genes can be used to generate more than 13 trillion different biomorphs. Humans, for comparison,
      have about 20,000 to 25,000 protein-coding genes.
    </p>
    <p>
      The gradual change in the biomorphs' appearance in each generation serves as a simple model of <em>cumulative
      selection</em>. Each biomorph is nearly identical to its parent, but after many generations the appearance of the
      biomorph can diverge wildly from the original. Biological evolution works in a similar way, though on a much
      larger time scale. For example, you closely resemble your parents, your parents closely resemble their parents,
      and so on, but if you go back tens of thousands of generations your distant ancestors would only bear a slight
      resemblance to you.
    </p>
    <p>
      Because you select which child you want to survive, biomorphs are an example of <em>artificial selection</em> (similar to
      how humans have guided dog evolution over the past 15,000 – 30,000 years). In nature, however, evolution is based
      on <em>natural selection</em>: organisms that are best suited for their environment are the ones most likely to
      survive and pass on their genes.
    </p>
  </section>
);

export default AboutView;