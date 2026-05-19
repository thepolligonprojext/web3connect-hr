import { useState } from 'react'

export function FloatingInput({ id, label, type = 'text', required, ...props }) {
  return (
    <div className="floating-field">
      <input id={id} type={type} placeholder=" " required={required} {...props} />
      <label htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label>
    </div>
  )
}

export function FloatingTextarea({ id, label, rows = 5, required, ...props }) {
  return (
    <div className="floating-field floating-field--area">
      <textarea id={id} placeholder=" " rows={rows} required={required} {...props} />
      <label htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label>
    </div>
  )
}

export function FloatingSelect({ id, label, required, children, ...props }) {
  const [hasValue, setHasValue] = useState(false)
  return (
    <div className={`floating-field floating-field--select${hasValue ? ' has-value' : ''}`}>
      <select
        id={id}
        required={required}
        onChange={e => {
          setHasValue(e.target.value !== '')
          props.onChange?.(e)
        }}
        {...props}
      >
        {children}
      </select>
      <label htmlFor={id}>{label}{required && <span aria-hidden="true"> *</span>}</label>
    </div>
  )
}

export function FileUpload({ id, label, name, required, accept }) {
  const [fileName, setFileName] = useState('')
  const [dragover, setDragover] = useState(false)

  function handleChange(e) {
    const file = e.target.files?.[0]
    setFileName(file ? file.name : '')
  }

  return (
    <div>
      <p style={{ margin: '0 0 0.4rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--muted)' }}>
        {label}
      </p>
      <label
        htmlFor={id}
        className={`file-upload${dragover ? ' is-dragover' : ''}`}
        onDragOver={e => { e.preventDefault(); setDragover(true) }}
        onDragLeave={() => setDragover(false)}
        onDrop={e => {
          e.preventDefault()
          setDragover(false)
          const file = e.dataTransfer.files?.[0]
          setFileName(file ? file.name : '')
        }}
      >
        <input
          id={id}
          name={name}
          type="file"
          accept={accept}
          required={required}
          onChange={handleChange}
        />
        <div className="file-upload-icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
        </div>
        {fileName
          ? <span className="file-upload-name">{fileName}</span>
          : <span className="file-upload-label"><strong>Click to upload</strong> or drag and drop</span>
        }
      </label>
    </div>
  )
}
