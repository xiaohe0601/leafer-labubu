import type { IAnimation } from "leafer-ui";

export function useLabubuPlayer(animation: Ref<IAnimation | undefined>) {
  const playerEl = shallowRef<HTMLAudioElement>();

  const playing = shallowRef(false);

  function play() {
    playing.value = true;

    animation.value = {
      style: {
        offsetY: -20
      },
      duration: 0.8,
      swing: true
    };

    void playerEl.value?.play();
  }

  function pause() {
    playing.value = false;

    animation.value = {
      style: {
        offsetY: 0
      }
    };

    playerEl.value?.pause();
  }

  function toggle() {
    if (!playing.value) {
      play();
    } else {
      pause();
    }
  }

  onScopeDispose(() => {
    pause();
  });

  return {
    playerEl,
    playing,
    play,
    pause,
    toggle
  };
}