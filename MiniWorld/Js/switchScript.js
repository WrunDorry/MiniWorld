function initToggleSwitch(toggleSwitchID) {
    const toggleSwitch = document.getElementById(toggleSwitchID);
    const savedState = JSON.parse(localStorage.getItem('switch-enabled'));
  
    if (savedState) {
      toggleSwitch.checked = savedState.enabled;
    }
  
    toggleSwitch.addEventListener('click', () => {
      localStorage.setItem('switch-enabled', JSON.stringify({
        enabled: toggleSwitch.checked,
      }));
      toggleScript(toggleSwitch.checked);
    });
  
    if (savedState?.enabled) {
      toggleScript(true);
    }
  
    function toggleScript(enabled) {
      const tag = document.querySelector(`script[src="./yh.js"]`);
      if (enabled && !tag) {
        const scriptTag = document.createElement('script');
        scriptTag.src = './yh.js';
        scriptTag.setAttribute('defer', '');
        document.body.appendChild(scriptTag);
      } else if (!enabled && tag) {
        tag.remove();
      }
    }
  }