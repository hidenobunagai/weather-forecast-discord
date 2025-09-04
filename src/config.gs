/**
 * WATCH_LOCATIONS をスクリプトプロパティから取得する。
 * 値は JSON 配列(["Tokyo","Osaka"]) または CSV("Tokyo,Osaka") を許容。
 */
function getWatchLocations() {
  const props = PropertiesService.getScriptProperties();
  const raw = props.getProperty('WATCH_LOCATIONS');
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
    if (typeof parsed === 'string') return parsed.split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    return [];
  } catch (e) {
    return raw.split(',').map(function (s) { return s.trim(); }).filter(Boolean);
  }
}

/**
 * 任意のスクリプトプロパティを取得するユーティリティ。
 */
function getEnv(name, defaultValue) {
  var v = PropertiesService.getScriptProperties().getProperty(name);
  return v != null ? v : defaultValue;
}

