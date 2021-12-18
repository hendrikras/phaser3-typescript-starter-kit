import * as Phaser from 'phaser';
import Scenes from './scenes';
import { PhaserNavMeshPlugin } from "phaser-navmesh";

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Sample',

  type: Phaser.AUTO,

  scale: {
    width: window.innerWidth,
    height: window.innerHeight,
  },

  scene: Scenes,

  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },

  plugins: {
    global: [
      { key: "NavMeshPlugin", 
        plugin: PhaserNavMeshPlugin, 
        mapping: "navMeshPlugin", 
        start: true 
      },
    ],
  },

  parent: 'game',
  backgroundColor: '#000000',
};

export const game = new Phaser.Game(gameConfig);

window.addEventListener('resize', () => {
  game.scale.refresh();
});
